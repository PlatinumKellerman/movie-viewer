import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
  NotFindValue,
} from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  const releaseYear = new Date(movie.release_date).getUTCFullYear();
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
          {movie.poster_path && (
            <Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            ></Poster>
          )}
          {movie.vote_average ? (
            <div
              style={{
                width: '60px',
                margin: 'auto',
                position: 'absolute',
                top: '0px',
                right: '0%',
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
              <InfoParams>Rating:</InfoParams>
              <InfoParams>Genres:</InfoParams>
              <InfoParams>Budget:</InfoParams>
              <InfoParams>Overview:</InfoParams>
            </ParamsList>

            <PropertiesList>
              <InfoValue>
                <Accent>{movie.vote_average}</Accent>
                {' / '}
                {movie.vote_count} votes
              </InfoValue>
              <InfoValue>
                {movie.genres.length ? (
                  movie.genres.map(genre => genre.name).join(' | ')
                ) : (
                  <NotFindValue style={{ color: '#E85A4F' }}>
                    Sorry, there are no genres
                  </NotFindValue>
                )}
              </InfoValue>
              <InfoValue>
                {movie.budget > 0 ? (
                  `$${movie.budget}`
                ) : (
                  <NotFindValue style={{ color: '#E85A4F' }}>
                    Sorry, no info
                  </NotFindValue>
                )}
              </InfoValue>
              <InfoValue>
                {movie.overview ? (
                  movie.overview
                ) : (
                  <NotFindValue style={{ color: '#E85A4F' }}>
                    Sorry, there is no description for this movie
                  </NotFindValue>
                )}
              </InfoValue>
            </PropertiesList>
          </SecondaryWrapper>
        </InfoWrapper>
      </Wrapper>
    </MainWrapper>
  );
};
