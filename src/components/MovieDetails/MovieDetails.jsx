import React from 'react';
import movieTrailer from 'movie-trailer';
import { toast } from 'react-toastify';
import { CircularProgressbar } from 'react-circular-progressbar';
import { getMovieCast } from '../../services/fetchMovies';
import 'react-circular-progressbar/dist/styles.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HomeLink from 'components/ui/HomeLink';
import AddInfoLinks from 'components/AddInfoLinks';
import poster_plug from '../../assets/poster_plug-min.jpg';
import { getImages } from '../../services/fetchMovies';
import { useNavigate } from 'react-router-dom';
import { getActorId } from '../../services/fetchMovies';
import actor_plug from '../../assets/actor-plug-min.jpg';

import Modal from '@mui/material/Modal';

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
  ProdLogo,
  ProdLogoWrapper,
  ImdbLogo,
  YouTubeLogo,
  PosterPlug,
  CastList,
  CastItem,
  CastNameButton,
  ModalWrapper,
  ModalButton,
  ModalBox,
  ModalList,
  ModalItem,
  BackdropImg,
} from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const releaseYear = new Date(movie.release_date).getUTCFullYear();
  const { movieId } = useParams();
  const [trailerUrl, setTrailerUrl] = useState('');
  const [cast, setCast] = useState([]);
  const [showAllCast, setShowAllCast] = useState(false);
  const [images, setImages] = useState([]);
  const [actorName, setActorName] = useState('');
  const [actorId, setActorID] = useState(null);
  const [actorPoster, setActorPoster] = useState(null);
  const [actorKnownFor, setActorKnownFor] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getTrailerUrl = async () => {
      try {
        const url = await movieTrailer(movie.title);
        if (url) {
          setTrailerUrl(url);
        } else {
          toast.error(`Sorry, there are no trailers for this movie.`);
        }
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };

    getTrailerUrl();
  }, [movie.title]);

  useEffect(() => {
    const movieCastResp = async () => {
      try {
        const response = await getMovieCast(movieId);
        setCast(response.cast);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    movieCastResp();
  }, [movieId]);

  useEffect(() => {
    const movieImages = async () => {
      try {
        const response = await getImages(movieId);
        setImages(response);
      } catch (error) {
        if (error) {
          if (error) {
            navigate('/*', { replace: true });
          }
        }
      }
    };
    movieImages();
  }, [movieId, navigate]);

  const GetActorId = async name => {
    try {
      const response = await getActorId(name);
      setActorID(response[0].id);
      setActorPoster(response[0].profile_path);
      setActorKnownFor(response[0].known_for);
      console.log(response);
      console.log(actorKnownFor);
    } catch (error) {
      toast.error('Oops! Something went wrong!');
    }
  };

  const handleActorId = name => {
    GetActorId(name);
    console.log(actorId);
  };

  const handleActorName = name => {
    setActorName(name);
    console.log(actorName);
  };

  // Circular Progress Bar
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

  const [openBackdrops, setOpenBackdrops] = useState(false);
  const handleBackdropsOpen = () => setOpenBackdrops(true);
  const handleBackdropsClose = () => setOpenBackdrops(false);

  const [openPosters, setOpenBPosters] = useState(false);
  const handlePostersOpen = () => setOpenBPosters(true);
  const handlePostersClose = () => setOpenBPosters(false);

  const [openCast, setOpenCast] = useState(false);
  const handleCastOpen = () => setOpenCast(true);
  const handleCastClose = () => setOpenCast(false);

  return (
    <MainWrapper>
      <HomeLink />
      <Wrapper>
        <PosterWrapper>
          {movie.poster_path ? (
            <Poster
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            ></Poster>
          ) : (
            <PosterPlug src={poster_plug} alt={'Poster Plug'} />
          )}
          {trailerUrl ? (
            <a
              href={trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Movie Trailer"
            >
              <YouTubeLogo />
            </a>
          ) : (
            <p></p>
          )}
          <ProdLogoWrapper>
            {movie.production_companies &&
              movie.production_companies.map(logo => (
                <ProdLogo
                  key={logo.id}
                  src={`https://image.tmdb.org/t/p/w500${logo.logo_path}`}
                  alt={logo.name}
                ></ProdLogo>
              ))}
          </ProdLogoWrapper>
          {/* // ----------------------------------------------- MODAL BACKDROPS ------------------------------------- */}
          <ModalWrapper>
            <ModalButton
              sx={{
                color: '#ffffff',
                border: '1px solid #86C232',
                borderRadius: '8px',
                marginBottom: '15px',
              }}
              onClick={handleBackdropsOpen}
            >
              MOVIE BACKDROPS
            </ModalButton>
            <Modal
              open={openBackdrops}
              onClose={handleBackdropsClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ModalBox>
                <ModalList>
                  <ModalItem>
                    {images.backdrops &&
                      images.backdrops.map(({ file_path }) => (
                        <BackdropImg
                          key={file_path}
                          src={`https://www.themoviedb.org/t/p/original${file_path}`}
                          alt={file_path}
                        />
                      ))}
                  </ModalItem>
                </ModalList>
              </ModalBox>
            </Modal>
          </ModalWrapper>
          {/* // ----------------------------------------------- MODAL BACKDROPS ---------------------------------------- */}

          {/* // ----------------------------------------------- MODAL POSTERS ------------------------------------- */}
          <ModalWrapper>
            <ModalButton
              sx={{
                color: '#ffffff',
                border: '1px solid #86C232',
                borderRadius: '8px',
                marginBottom: '15px',
              }}
              onClick={handlePostersOpen}
            >
              MOVIE POSTERS
            </ModalButton>
            <Modal
              open={openPosters}
              onClose={handlePostersClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ModalBox>
                <ModalList>
                  <ModalItem>
                    {images.posters &&
                      images.posters.map(({ file_path }) => (
                        <BackdropImg
                          key={file_path}
                          src={`https://www.themoviedb.org/t/p/original${file_path}`}
                          alt={file_path}
                        />
                      ))}
                  </ModalItem>
                </ModalList>
              </ModalBox>
            </Modal>
          </ModalWrapper>
          {/* // ----------------------------------------------- MODAL ---------------------------------------- */}
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
          <Tagline>{movie.tagline}</Tagline>
          <DetailsWrapper>
            <InfoParams>Cast:</InfoParams>
            {/* ---------------------------------------------------------------- */}
            <ModalWrapper>
              <Modal
                open={openCast}
                onClose={handleCastClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <ModalBox>
                  <div>
                    <img
                      style={{ width: '400px' }}
                      src={`https://image.tmdb.org/t/p/original${actorPoster}`}
                      alt={actorName}
                    ></img>
                    <p>{actorName}</p>
                  </div>
                  <div>
                    <p>Known For:</p>
                    <ul>
                      <li
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        {actorKnownFor &&
                          actorKnownFor.map(
                            ({
                              poster_path,
                              id,
                              first_air_date,
                              genre_id,
                              name,
                              original_name,
                              origin_country,
                              overview,
                              vote_average,
                            }) => (
                              <React.Fragment key={id}>
                                {poster_path ? (
                                  <img
                                    style={{
                                      width: '120px',
                                    }}
                                    src={`https://www.themoviedb.org/t/p/w400${poster_path}`}
                                    alt={original_name}
                                  />
                                ) : (
                                  <actor_plug
                                    src={actor_plug}
                                    alt={'Actor Plug'}
                                  />
                                )}
                              </React.Fragment>
                            )
                          )}
                      </li>
                    </ul>
                  </div>
                </ModalBox>
              </Modal>
            </ModalWrapper>
            {/* ------------------------------------------------------------------ */}
            <CastList>
              {showAllCast
                ? cast.map(actor => (
                    <CastItem key={actor.id}>
                      <CastNameButton
                        onClick={() => {
                          handleActorName(actor.name);
                          handleActorId(actor.name);
                          handleCastOpen();
                        }}
                        key={actor.id}
                      >
                        {actor.name}
                      </CastNameButton>
                    </CastItem>
                  ))
                : cast.slice(0, 5).map(actor => (
                    <CastItem key={actor.id}>
                      <CastNameButton
                        onClick={() => {
                          handleActorName(actor.name);
                          handleActorId(actor.name);
                          handleCastOpen();
                        }}
                        key={actor.id}
                      >
                        {actor.name}
                      </CastNameButton>
                    </CastItem>
                  ))}

              {cast.length > 4 && (
                <CastNameButton
                  style={{ marginBottom: '20px' }}
                  onClick={() => setShowAllCast(!showAllCast)}
                >
                  . . .
                </CastNameButton>
              )}
            </CastList>
            <InfoParams>Rating:</InfoParams>
            <InfoValue>
              <Accent>{movie.vote_average}</Accent>
              {' / '}
              {movie.vote_count} votes
            </InfoValue>
            {movie.vote_average ? (
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
            {movie.imdb_id && (
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Movie Homepage"
              >
                <ImdbLogo />
              </a>
            )}
            <InfoParams>Genres:</InfoParams>
            <InfoValue>
              {movie.genres.length ? (
                movie.genres.map(genre => genre.name).join('  /  ')
              ) : (
                <NotFindValue style={{ color: '#E85A4F' }}>
                  Sorry, there are no genres
                </NotFindValue>
              )}
            </InfoValue>
            <InfoParams>Countries:</InfoParams>
            <InfoValue>
              {movie.production_countries.length ? (
                movie.production_countries.map(c => c.name).join('  /  ')
              ) : (
                <NotFindValue style={{ color: '#E85A4F' }}>
                  Sorry, there are no genres
                </NotFindValue>
              )}
            </InfoValue>
            <InfoParams>Budget:</InfoParams>
            <InfoValue>
              {movie.budget ? (
                `$${movie.budget}`
              ) : (
                <NotFindValue style={{ color: '#E85A4F' }}>
                  Sorry, no info
                </NotFindValue>
              )}
            </InfoValue>
            <InfoParams>Overview:</InfoParams>
            <InfoValue>
              {movie.overview ? (
                movie.overview
              ) : (
                <NotFindValue style={{ color: '#E85A4F' }}>
                  Sorry, there is no description for this movie
                </NotFindValue>
              )}
            </InfoValue>
            <AddInfoLinks location={location} />
          </DetailsWrapper>
        </InfoWrapper>
      </Wrapper>
    </MainWrapper>
  );
};
