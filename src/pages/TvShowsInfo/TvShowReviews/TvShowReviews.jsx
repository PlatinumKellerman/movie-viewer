import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTvShowReviews } from '../../../services/fetchMovies';
import Loader from 'components/Loader';
import TvShowReviewsList from 'components/TvShowDetail/TvShowReviewsList';
import { ReviewPlug } from './TvShowReviews.styled';

const TvShowReviews = () => {
  const { showId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const tvShowReviews = async () => {
      try {
        const response = await getTvShowReviews(showId);
        setReviews(response.results);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    tvShowReviews();
    setIsLoading(true);
  }, [showId]);

  return (
    <div>
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        <TvShowReviewsList reviews={reviews} />
      ) : (
        <ReviewPlug>
          Sorry. We don't have any reviews for this tv show.{' '}
        </ReviewPlug>
      )}
    </div>
  );
};

export default TvShowReviews;
