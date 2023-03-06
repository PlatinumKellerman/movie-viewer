import HomeLink from 'components/ui/HomeLink';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movie-viewer';
  console.log();
  console.log(movie);
  return (
    <MainWrapper>
      <HomeLink to={backLinkHref}></HomeLink>
      <Wrapper>
        <PosterWrapper>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          ></Poster>
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
                <Accent>{`${
                  Number(movie.vote_average).toFixed(1) * 10
                }%`}</Accent>
              </InfoValue>
              <InfoValue>
                <Accent>{movie.vote_average}</Accent> ({movie.vote_count} votes)
              </InfoValue>
              <InfoValue>
                {movie.genres
                  ? movie.genres.map(genre => genre.name).join(' | ')
                  : 'There are no genres!'}
              </InfoValue>
              <InfoValue>${movie.budget}</InfoValue>
              <InfoValue>{movie.overview}</InfoValue>
            </PropertiesList>
          </SecondaryWrapper>
        </InfoWrapper>
      </Wrapper>
    </MainWrapper>
  );
};
