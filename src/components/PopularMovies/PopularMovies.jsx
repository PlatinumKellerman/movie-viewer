import { Link } from 'react-router-dom';
import { List, ImgWrapper, Poster } from './PopularMovies.styled';

const PopularMovies = ({ movies, location }) => {
  return (
    <>
      <List>
        {movies.map(({ id, fullTitle, title, image }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <ImgWrapper>
                <Poster src={image} alt={title}></Poster>
                <p>{fullTitle}</p>
              </ImgWrapper>
            </Link>
          </li>
        ))}
      </List>
    </>
  );
};
export default PopularMovies;
