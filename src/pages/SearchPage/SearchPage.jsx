import SearchForm from '../../components/SearchForm';
import Loader from '../../components/Loader';
import FoundMedia from '../../components/FoundMedia';
import { searchMoviesAndTVShows } from '../../services/fetchMovies';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchFormWrapper, BackLink } from './SearchPage.styled';

const SearchPage = () => {
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('query') ?? '';
  const backLinkHref = location.state?.from ?? '/movie-viewer';

  useEffect(() => {
    if (name === '' || name === null) return;
    async function moviesByName() {
      try {
        const results = await searchMoviesAndTVShows(name);
        const moviesAndTVShows = results.filter(
          item => item.media_type === 'movie' || item.media_type === 'tv'
        );
        setMedia(moviesAndTVShows);
        setIsLoading(false);
        if (moviesAndTVShows.length === 0) {
          toast.error(`Sorry, there are no movies for this request.`);
        }
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    }
    if (name) {
      moviesByName();
      setIsLoading(true);
    }
  }, [name]);

  const handleMovieNameSubmit = name => {
    if (name) {
      setSearchParams(name);
    }
  };

  return (
    <SearchFormWrapper>
      <BackLink to={backLinkHref}>
        {'<-'} {''} Go Back
      </BackLink>
      <SearchForm onSubmit={handleMovieNameSubmit} />
      {isLoading && <Loader />}
      {media && <FoundMedia media={media} location={location} />}
    </SearchFormWrapper>
  );
};

export default SearchPage;
