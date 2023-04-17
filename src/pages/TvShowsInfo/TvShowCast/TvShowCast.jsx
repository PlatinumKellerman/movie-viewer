import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTvShowCast } from '../../../services/fetchMovies';
import Loader from 'components/Loader';
import TvShowCastList from 'components/TvShowDetail/TvShowCastList';
import { CastPlug } from './TvShowCast.styled';

const TvShowCast = () => {
  const { showId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movieCastResp = async () => {
      try {
        const response = await getTvShowCast(showId);
        setCast(response.cast);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    movieCastResp();
    setIsLoading(true);
  }, [showId]);

  return (
    <div>
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <TvShowCastList cast={cast} />
      ) : (
        <CastPlug>Sorry. We don't have any cast for this movie. </CastPlug>
      )}
    </div>
  );
};

export default TvShowCast;
