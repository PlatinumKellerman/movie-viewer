import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { List, ImgWrapper, Poster } from './PopularMovies.styled';
import ReactPaginate from 'react-paginate';
import ReactDOM from 'react-dom';

const PopularMovies = ({ movies, location }) => {
  const moviesPerPage = 20;
  const [movieOffset, setMovieOffset] = useState(0);
  const endOffset = movieOffset + moviesPerPage;
  const currentMovies = movies.slice(movieOffset, endOffset);
  const pageCount = Math.ceil(movies.length / moviesPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * moviesPerPage) % movies.length;
    setMovieOffset(newOffset);
  };

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
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
export default PopularMovies;
