import Container from 'layout/common/Container/Container';
import { Poster } from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  console.log(movie);
  return (
    <Container>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      ></Poster>
      <p>{movie.title}</p>
      <p>Budget:{movie.budget}</p>
      <p>
        Genres:
        {movie.genres
          ? movie.genres.map(genre => genre.name).join(', ')
          : 'There are no genres!'}
      </p>
      <p>
        Movie hompage: <a href={movie.homepage}>{movie.homepage}</a>
      </p>
      <p>Overview: {movie.overview}</p>
    </Container>
  );
};
