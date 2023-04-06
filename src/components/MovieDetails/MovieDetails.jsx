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
              {movie.vote_average ? (
                <InfoValue>{`${
                  Number(movie.vote_average).toFixed(1) * 10
                }%`}</InfoValue>
              ) : (
                <p style={{ color: '#E85A4F' }}>Sorry, no info</p>
              )}
              <InfoValue>
                <Accent>{movie.vote_average}</Accent>
                {' / '}
                {movie.vote_count} votes
              </InfoValue>
              <InfoValue>
                {movie.genres.length ? (
                  movie.genres.map(genre => genre.name).join(' | ')
                ) : (
                  <p style={{ color: '#E85A4F' }}>Sorry, there are no genres</p>
                )}
              </InfoValue>
              <InfoValue>
                {movie.budget > 0 ? (
                  `$${movie.budget}`
                ) : (
                  <p style={{ color: '#E85A4F' }}>Sorry, no info</p>
                )}
              </InfoValue>
              <InfoValue>
                {movie.overview ? (
                  movie.overview
                ) : (
                  <p style={{ color: '#E85A4F' }}>
                    Sorry, there is no description for this movie
                  </p>
                )}
              </InfoValue>
            </PropertiesList>
          </SecondaryWrapper>
        </InfoWrapper>
      </Wrapper>
    </MainWrapper>
  );
};
