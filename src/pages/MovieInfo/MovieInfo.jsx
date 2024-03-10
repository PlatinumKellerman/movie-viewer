import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieDetailsById, getImages } from '../../services/fetchMovies';
import { useNavigate } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails';
import Loader from 'components/Loader';

export const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const movieInfo = async () => {
      try {
        const response = await getMovieDetailsById(movieId);
        setMovie(response);
        setIsLoading(false);
      } catch (error) {
        if (error) {
          if (error) {
            navigate('/*', { replace: true });
          }
        }
      }
    };
    movieInfo();
    setIsLoading(true);
  }, [movieId, navigate]);

  useEffect(() => {
    const movieImages = async () => {
      try {
        setIsLoading(true); // Встановлюємо isLoading на початку запиту
        const response = await getImages(movieId);
        if (response && response.data) {
          setImages(response.data);
        }
        setIsLoading(false); // Встановлюємо isLoading в кінці успішного запиту
      } catch (error) {
        console.log('ERROR:', error);
        setIsLoading(false); // Встановлюємо isLoading в кінці обробки помилки
      }
    };
    movieImages();
  }, [movieId]); // Залежність тільки від movieId

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>{movie && <MovieDetails movie={movie} images={images} />}</>
      )}
      <Outlet />
    </>
  );
};
