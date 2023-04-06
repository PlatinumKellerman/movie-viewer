import HomeLink from 'components/ui/HomeLink';
import {
  MainWrapper,
  Poster,
  MovieTitle,
  InfoValue,
  InfoWrapper,
  ParamsList,
  PropertiesList,
  InfoParams,
  Accent,
  PosterWrapper,
  Wrapper,
  SecondaryWrapper,
} from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  const releaseYear = new Date(movie.release_date).getUTCFullYear();
  return (
    <MainWrapper>
      <HomeLink />
      <Wrapper>
        <PosterWrapper>
          {movie.poster_path && (
            <Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            ></Poster>
          )}
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
          <SecondaryWrapper>
            <ParamsList>
              <InfoParams>User Score:</InfoParams>
              <InfoParams>Rating:</InfoParams>
              <InfoParams>Genres:</InfoParams>
              <InfoParams>Budget:</InfoParams>
              <InfoParams>Overview:</InfoParams>
            </ParamsList>

            <PropertiesList>
              <InfoValue>
                {movie.vote_average ? (
                  <Accent>{`${
                    Number(movie.vote_average).toFixed(1) * 10
                  }%`}</Accent>
                ) : (
                  'Sorry, no info'
                )}
              </InfoValue>
              <InfoValue>
                {movie.vote_average ? (
                  <Accent>{movie.vote_average}</Accent>
                ) : (
                  'Sorry, no info'
                )}
                {' / '}
                {movie.vote_count ? (
                  <Accent>{movie.vote_count} votes</Accent>
                ) : (
                  'Sorry, no info'
                )}
              </InfoValue>
              <InfoValue>
                {movie.genres.length
                  ? movie.genres.map(genre => genre.name).join(' | ')
                  : 'Sorry, there are no genres'}
              </InfoValue>
              <InfoValue>
                {movie.budget > 0 ? `${movie.budget}` : 'Sorry, no info'}
              </InfoValue>
              <InfoValue>
                {movie.overview
                  ? movie.overview
                  : 'Sorry, there is no description for this movie'}
              </InfoValue>
            </PropertiesList>
          </SecondaryWrapper>
        </InfoWrapper>
      </Wrapper>
    </MainWrapper>
  );
};
