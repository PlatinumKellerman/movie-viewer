import Container from 'layout/common/Container/Container';
import actor_plug from '../../../assets/actor-plug-min.jpg';
import {
  CastWrapper,
  CastList,
  CastListItem,
  Photo,
  ActorPlug,
} from './MovieCastList.styled';

const MovieCastList = ({ cast }) => {
  return (
    <Container>
      <CastList>
        {cast.length > 0 &&
          cast.map(({ id, name, character, profile_path }) => (
            <CastListItem key={id}>
              <CastWrapper>
                {profile_path ? (
                  <Photo
                    src={`https://www.themoviedb.org/t/p/original${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <ActorPlug src={actor_plug} alt={'Actor Plug'} />
                )}
                <p>{name}</p>
                <p>{`(${character})`}</p>
              </CastWrapper>
            </CastListItem>
          ))}
      </CastList>
    </Container>
  );
};

export default MovieCastList;
