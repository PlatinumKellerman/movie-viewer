import moment from 'moment';
import {
  ReviewWrapper,
  ReviewParams,
  ReviewValue,
  ReviewItem,
  Avatar,
  AvatarPlug,
  ReviewDate,
} from './MovieReviewsList.styled';
import avatar_plug from '../../../assets/actor-plug-min.jpg';

const MovieReviewsList = ({ reviews }) => {
  return (
    <ReviewWrapper>
      <ul>
        {reviews.length > 0 &&
          reviews.map(({ id, author, content, author_details, updated_at }) => (
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
              <ReviewParams>
                {author}
                <ReviewDate>
                  {`(${moment(updated_at).format('DD MMMM YYYY')})`}
                </ReviewDate>
              </ReviewParams>
              <ReviewValue>{content}</ReviewValue>
            </ReviewItem>
          ))}
      </ul>
    </ReviewWrapper>
  );
};

export default MovieReviewsList;
