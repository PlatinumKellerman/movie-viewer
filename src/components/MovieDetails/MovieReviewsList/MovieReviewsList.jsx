import {
  ReviewWrapper,
  ReviewParams,
  ReviewValue,
  ReviewItem,
  Avatar,
} from './MovieReviewsList.styled';

const MovieReviewsList = ({ reviews }) => {
  console.log(reviews);
  return (
    <ReviewWrapper>
      <ul>
        {reviews.length > 0 &&
          reviews.map(({ id, author, content, author_details }) => (
            <ReviewItem key={id}>
              <Avatar
                src={`https://www.themoviedb.org/t/p/original${author_details.avatar_path}`}
                alt={author_details.name}
              />
              <ReviewParams>{author}</ReviewParams>
              <ReviewValue>{content}</ReviewValue>
            </ReviewItem>
          ))}
      </ul>
    </ReviewWrapper>
  );
};

export default MovieReviewsList;
