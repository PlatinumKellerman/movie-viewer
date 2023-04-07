import { Link } from 'react-router-dom';
import {
  List,
  ImgWrapper,
  Poster,
  MovieTitle,
  ListItem,
  MovieYear,
} from './FoundMovies.styled';

const FoundMovies = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path, release_date }) => (
        <ListItem key={id}>
          <Link to={`/movie-viewer/movies/${id}`} state={{ from: location }}>
            <ImgWrapper>
              {poster_path && (
                <Poster
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                ></Poster>
              )}
              <MovieTitle>{title}</MovieTitle>
              <MovieYear>({new Date(release_date).getUTCFullYear()})</MovieYear>
            </ImgWrapper>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default FoundMovies;
