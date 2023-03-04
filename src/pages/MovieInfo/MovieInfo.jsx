import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetailsById } from '../../services/fetchMovies';
import HomeLink from '../../components/ui/HomeLink';
import { useNavigate } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails';

export const MovieInfo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movie-viewer';
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const movieInfo = async () => {
      try {
        const response = await getMovieDetailsById(movieId);
        setMovie(response);
      } catch (error) {
        if (error) {
          if (error) {
            navigate('/*', { replace: true });
          }
        }
      }
    };
    movieInfo();
  }, [movieId, navigate]);

  return (
    <>
      <HomeLink to={backLinkHref}>{'<'} Go back</HomeLink>
      <MovieDetails movie={movie} />
      <Outlet />
    </>
  );
};
