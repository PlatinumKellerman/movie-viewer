import { Link } from 'react-router-dom';
import {
  List,
  ImgWrapper,
  Poster,
  MovieTitle,
  ListItem,
} from './FoundMovies.styled';

const FoundMovies = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
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
            </ImgWrapper>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default FoundMovies;
