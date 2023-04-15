import {
  ReviewWrapper,
  ReviewParams,
  ReviewValue,
  ReviewItem,
  Avatar,
  AvatarPlug,
} from './MovieReviewsList.styled';
import avatar_plug from '../../../assets/actor-plug-min.jpg';

const MovieReviewsList = ({ reviews }) => {
  return (
    <ReviewWrapper>
      <ul>
        {reviews.length > 0 &&
          reviews.map(({ id, author, content, author_details }) => (
            <ReviewItem key={id}>
              {author_details.avatar_path &&
              author_details.avatar_path.startsWith('/') &&
              !author_details.avatar_path.startsWith('/https:') ? (
                <Avatar
                  src={`https://www.themoviedb.org/t/p/original${author_details.avatar_path}`}
                  alt={author_details.name}
                />
              ) : (
                <AvatarPlug src={avatar_plug} alt={'Avatar Plug'} />
              )}

              <ReviewParams>{author}</ReviewParams>
              <ReviewValue>{content}</ReviewValue>
            </ReviewItem>
          ))}
      </ul>
    </ReviewWrapper>
  );
};

export default MovieReviewsList;
