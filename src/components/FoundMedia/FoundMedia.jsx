import { Link } from 'react-router-dom';
import poster_plug from '../../assets/poster_plug-min.jpg';
import {
  List,
  ImgWrapper,
  Poster,
  MovieTitle,
  ListItem,
  MovieYear,
  PosterPlug,
} from './FoundMedia.styled';

const FoundMedia = ({ media, location }) => {
  return (
    <List>
      {media.map(
        ({
          id,
          title,
          name,
          poster_path,
          release_date,
          media_type,
          first_air_date,
        }) => (
          <ListItem key={id}>
            <Link
              to={
                media_type === 'movie'
                  ? `/movie-viewer/movies/${id}`
                  : `/movie-viewer/tv-shows/${id}`
              }
              state={{ from: location }}
            >
              <ImgWrapper>
                {poster_path ? (
                  <Poster
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title || name}
                  ></Poster>
                ) : (
                  <PosterPlug src={poster_plug} alt={'Poster Plug'} />
                )}
                <MovieTitle>{title || name}</MovieTitle>
                <MovieYear>
                  {media_type === 'movie' && release_date
                    ? new Date(release_date).getUTCFullYear()
                    : media_type === 'tv' && first_air_date
                    ? new Date(first_air_date).getUTCFullYear()
                    : 'No info'}
                </MovieYear>
              </ImgWrapper>
            </Link>
          </ListItem>
        )
      )}
    </List>
  );
};

export default FoundMedia;
