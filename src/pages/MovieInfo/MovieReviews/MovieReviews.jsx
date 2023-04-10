import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieReviews } from '../../../services/fetchMovies';
import Loader from 'components/Loader';
import MovieReviewsList from 'components/MovieDetails/MovieReviewsList';
import { ReviewPlug } from './MovieReviews.styled';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    movieReviews();
    setIsLoading(true);
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      {isLoading && <Loader />}
      <MovieReviewsList reviews={reviews}></MovieReviewsList>
      {reviews.length === 0 && (
        <ReviewPlug> We don't have any reviews for this movie. </ReviewPlug>
      )}
    </>
  );
};

export default MovieReviews;
