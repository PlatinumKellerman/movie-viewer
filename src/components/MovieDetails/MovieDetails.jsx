import {
  Poster,
  InfoParams,
  MovieTitle,
  InfoValue,
} from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  const releaseDate = new Date(movie.release_date).getUTCFullYear();
  console.log();
  console.log(movie);
  return (
    <div>
      <div>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        ></Poster>
      </div>

      <div>
        <MovieTitle>
          <InfoValue>
            {movie.title} ({releaseDate})
          </InfoValue>
        </MovieTitle>
        <InfoParams>
          <InfoValue>Release Year: {releaseDate}</InfoValue>
        </InfoParams>
        <InfoParams>
          User Score: {`${Number(movie.vote_average).toFixed(1) * 10}%`}
        </InfoParams>
        <InfoParams>
          <InfoValue>
            Rating: {movie.vote_average} ({movie.vote_count} votes)
          </InfoValue>
        </InfoParams>
        <InfoParams>
          <InfoValue>
            {' '}
            Genres:{' '}
            {movie.genres
              ? movie.genres.map(genre => genre.name).join(', ')
              : 'There are no genres!'}
          </InfoValue>
        </InfoParams>
        <InfoParams>
          <InfoValue>Budget: ${movie.budget}</InfoValue>
        </InfoParams>
        <InfoParams>
          <InfoValue>
            Movie hompage: <a href={movie.homepage}>{movie.homepage}</a>
          </InfoValue>
        </InfoParams>
        <InfoParams>
          <InfoValue>Overview: {movie.overview}</InfoValue>
        </InfoParams>
      </div>
    </div>
  );
};
