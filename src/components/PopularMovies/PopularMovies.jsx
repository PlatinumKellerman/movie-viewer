import MoviePagination from '../ui/MoviePagination';

const PopularMovies = ({ movies, location }) => {
  return (
    <>
      <MoviePagination movies={movies} location={location} />
    </>
  );
};
export default PopularMovies;
