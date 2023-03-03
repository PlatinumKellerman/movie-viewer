import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Container from '../../layout/common/Container/Container';
import Loader from '../../components/Loader';
import { getMostPopularMovies } from '../../services/fetchMovies';
import PopularMovies from '../../components/PopularMovies/PopularMovies';
import { HomePageTitle } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await getMostPopularMovies();
        setMovies(response);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    getPopularMovies();
    setIsLoading(true);
  }, []);

  return (
    <Container>
      <HomePageTitle>Trending movies for the WEEK</HomePageTitle>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        movies && <PopularMovies movies={movies} location={location} />
      )}
    </Container>
  );
};

export default HomePage;
