import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getTvShowById } from '../../services/fetchMovies';
import TvShowDetail from '../../components/TvShowDetail';
import Loader from 'components/Loader';

const TvShowsInfo = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const movieInfo = async () => {
      try {
        const response = await getTvShowById(showId);
        setShow(response);
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
  }, [showId, navigate]);

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        show && <TvShowDetail show={show} />
      )}
      <Outlet />
    </>
  );
};

export default TvShowsInfo;
