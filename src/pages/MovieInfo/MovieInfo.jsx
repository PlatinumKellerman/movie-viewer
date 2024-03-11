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
        const response = await getImages(movieId);
        setImages(response);
        setIsLoading(false);
      } catch (error) {
        if (error) {
          if (error) {
            navigate('/*', { replace: true });
          }
        }
      }
    };
    movieImages();
    setIsLoading(true);
  }, [movieId, navigate]);

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>{movie && <MovieDetails movie={movie} movieImages={images} />}</>
      )}
      <Outlet />
    </>
  );
};
