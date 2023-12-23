import movieTrailer from 'movie-trailer';
import { toast } from 'react-toastify';
import { CircularProgressbar } from 'react-circular-progressbar';
import { getMovieCast } from '../../services/fetchMovies';
import 'react-circular-progressbar/dist/styles.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HomeLink from 'components/ui/HomeLink';
import AddInfoLinks from 'components/AddInfoLinks';
import poster_plug from '../../assets/poster_plug-min.jpg';
import {
  MainWrapper,
  Poster,
  MovieTitle,
  InfoValue,
  InfoWrapper,
  DetailsWrapper,
  InfoParams,
  Accent,
  PosterWrapper,
  Wrapper,
  NotFindValue,
  Tagline,
  ProdLogo,
  ProdLogoWrapper,
  ImdbLogo,
  YouTubeLogo,
  PosterPlug,
  CastList,
} from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const releaseYear = new Date(movie.release_date).getUTCFullYear();

  const { movieId } = useParams();
  const [trailerUrl, setTrailerUrl] = useState('');
  const [cast, setCast] = useState([]);
  const [showAllCast, setShowAllCast] = useState(false);

  useEffect(() => {
    const getTrailerUrl = async () => {
      try {
        const url = await movieTrailer(movie.title);
        if (url) {
          setTrailerUrl(url);
        } else {
          toast.error(`Sorry, there are no trailers for this movie.`);
        }
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };

    getTrailerUrl();
  }, [movie.title]);

  useEffect(() => {
    const movieCastResp = async () => {
      try {
        const response = await getMovieCast(movieId);
        setCast(response.cast);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    movieCastResp();
  }, [movieId]);

  // Circular Progress Bar
  const userScore = Number(movie.vote_average).toFixed(1) * 10;
  const progressBarStyles = {
    textSize: '5px',
    path: {
      // Створюємо кругову форму для тексту
      stroke: '#E85A4F',
      strokeLinecap: 'butt',
      // Запобігаємо виходу тексту за межі прогрес-бару
      transform: 'rotate(90deg)',
      transformOrigin: 'center center',
    },
    text: { fill: '#E85A4F', fontSize: '32px' },
    // Відступ між цифрами та колом прогрес-бару
    trail: {
      strokeWidth: '8px',
    },
  };

  return (
    <MainWrapper>
      <HomeLink />
      <Wrapper>
        <PosterWrapper>
          {movie.poster_path ? (
            <Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            ></Poster>
          ) : (
            <PosterPlug src={poster_plug} alt={'Poster Plug'} />
          )}
          {trailerUrl ? (
            <a
              href={trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Movie Trailer"
            >
              <YouTubeLogo />
            </a>
          ) : (
            <p></p>
          )}
          <ProdLogoWrapper>
            {movie.production_companies &&
              movie.production_companies.map(logo => (
                <ProdLogo
                  key={logo.id}
                  src={`https://image.tmdb.org/t/p/w500${logo.logo_path}`}
                  alt={logo.name}
                ></ProdLogo>
              ))}
          </ProdLogoWrapper>
        </PosterWrapper>
        <InfoWrapper>
          <a
            href={movie.homepage}
            target="_blank"
            rel="noopener noreferrer"
            title="Movie Homepage"
          >
            <MovieTitle>
              {movie.title} ({releaseYear})
            </MovieTitle>
          </a>
          <Tagline>{movie.tagline}</Tagline>
          <DetailsWrapper>
            <InfoParams>Cast:</InfoParams>
            <CastList>
              {showAllCast
                ? cast.map(actor => actor.name).join(', ')
                : cast
                    .slice(0, 4)
                    .map(actor => actor.name)
                    .join(', ')}
              {cast.length > 4 && (
                <span onClick={() => setShowAllCast(!showAllCast)}> ...</span>
              )}
            </CastList>
            <InfoParams>Rating:</InfoParams>
            <InfoValue>
              <Accent>{movie.vote_average}</Accent>
              {' / '}
              {movie.vote_count} votes
            </InfoValue>
            {movie.vote_average ? (
              <div
                style={{
                  width: '60px',
                  paddingBottom: '15px',
                }}
              >
                <CircularProgressbar
                  value={userScore}
                  text={`${userScore}%`}
                  styles={progressBarStyles}
                />
              </div>
            ) : (
              <NotFindValue style={{ color: '#E85A4F' }}>
                Sorry, no info
              </NotFindValue>
            )}
            {movie.imdb_id && (
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Movie Homepage"
              >
                <ImdbLogo />
              </a>
            )}
            <InfoParams>Genres:</InfoParams>
            <InfoValue>
              {movie.genres.length ? (
                movie.genres.map(genre => genre.name).join('  /  ')
              ) : (
                <NotFindValue style={{ color: '#E85A4F' }}>
                  Sorry, there are no genres
                </NotFindValue>
              )}
            </InfoValue>
            <InfoParams>Countries:</InfoParams>
            <InfoValue>
              {movie.production_countries.length ? (
                movie.production_countries.map(c => c.name).join('  /  ')
              ) : (
                <NotFindValue style={{ color: '#E85A4F' }}>
                  Sorry, there are no genres
                </NotFindValue>
              )}
            </InfoValue>
            <InfoParams>Budget:</InfoParams>
            <InfoValue>
              {movie.budget ? (
                `$${movie.budget}`
              ) : (
                <NotFindValue style={{ color: '#E85A4F' }}>
                  Sorry, no info
                </NotFindValue>
              )}
            </InfoValue>
            <InfoParams>Overview:</InfoParams>
            <InfoValue>
              {movie.overview ? (
                movie.overview
              ) : (
                <NotFindValue style={{ color: '#E85A4F' }}>
                  Sorry, there is no description for this movie
                </NotFindValue>
              )}
            </InfoValue>
            <AddInfoLinks location={location} />
          </DetailsWrapper>
        </InfoWrapper>
      </Wrapper>
    </MainWrapper>
  );
};
