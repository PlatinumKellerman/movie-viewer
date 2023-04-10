import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import HomeLink from '../ui/HomeLink';
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
  NetworkPoster,
} from './TvShowDetail.styled';

const TvShowDetail = ({ show }) => {
  const releaseYear = new Date(show.first_air_date).getUTCFullYear();
  const userScore = Number(show.vote_average).toFixed(1) * 10;
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

  console.log(show);

  return (
    <MainWrapper>
      <HomeLink />
      <Wrapper>
        <PosterWrapper>
          {show.poster_path && (
            <Poster
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
            ></Poster>
          )}
          <NetworkPoster
            src={`https://image.tmdb.org/t/p/w500${show.networks[0].logo_path}`}
            alt={show.name}
          ></NetworkPoster>
        </PosterWrapper>
        <InfoWrapper>
          <a
            href={show.homepage}
            target="_blank"
            rel="noopener noreferrer"
            title="Movie Homepage"
          >
            <MovieTitle>
              {show.name} ({releaseYear})
            </MovieTitle>
          </a>
          <Tagline>{show.tagline}</Tagline>
          <DetailsWrapper>
            <InfoParams>Rating:</InfoParams>
            <InfoValue>
              <Accent>{show.vote_average}</Accent>
              {' / '}
              {show.vote_count} votes
            </InfoValue>
            {show.vote_average ? (
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
            <InfoParams>Genres:</InfoParams>
            <InfoValue>
              {show.genres.length ? (
                show.genres.map(genre => genre.name).join('  /  ')
              ) : (
                <NotFindValue style={{ color: '#E85A4F' }}>
                  Sorry, there are no genres
                </NotFindValue>
              )}
            </InfoValue>
            <InfoParams>Countries:</InfoParams>
            <InfoValue>
              {show.production_countries.length ? (
                show.production_countries.map(c => c.name).join('  /  ')
              ) : (
                <NotFindValue style={{ color: '#E85A4F' }}>
                  Sorry, there are no genres
                </NotFindValue>
              )}
            </InfoValue>
            <InfoParams>Seasons:</InfoParams>
            <InfoValue>
              {show.seasons.length > 0 ? (
                show.seasons.length
              ) : (
                <NotFindValue style={{ color: '#E85A4F' }}>
                  Sorry, no info
                </NotFindValue>
              )}
            </InfoValue>
            <InfoParams>Status:</InfoParams>
            <InfoValue>{show.status}</InfoValue>
            <InfoParams>Overview:</InfoParams>
            <InfoValue>
              {show.overview ? (
                show.overview
              ) : (
                <NotFindValue style={{ color: '#E85A4F' }}>
                  Sorry, there is no description for this movie
                </NotFindValue>
              )}
            </InfoValue>
          </DetailsWrapper>
        </InfoWrapper>
      </Wrapper>
    </MainWrapper>
  );
};

export default TvShowDetail;
