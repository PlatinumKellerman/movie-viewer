// import MoviePagination from '../ui/MoviePagination';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { List, ImgWrapper, Poster } from './PopularMovies.styled';

const PopularMovies = ({ movies, location }) => {
  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <List>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <ImgWrapper>
                  <Poster
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                  ></Poster>
                  <p>{title}</p>
                </ImgWrapper>
              </Link>
            </li>
          ))}
        </List>
      </Box>
      {/* <MoviePagination movies={movies} location={location} /> */}
    </>
  );
};
export default PopularMovies;
