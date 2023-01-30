import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import MoviePagination from '../../components/ui/MoviePagination/Pagination';
// import { getMostPopularMovies } from '../../services/fetchMovies';
import PopularMovies from '../../components/PopularMovies/PopularMovies';

import mostPopularMovies from '../../temporarilyData/mostPopularMovies.json';

const HomePage = () => {
  // WORKING CODE (FETCH MOST POPULAR MOVIES) ///////////////////////////
  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   const getPopularMovies = async () => {
  //     try {
  //       const response = await getMostPopularMovies();
  //       setMovies(response);
  //       setIsLoading(false);
  //     } catch (error) {
  //       toast.error('Oops! Something went wrong!');
  //     }
  //   };
  //   getPopularMovies();
  //   setIsLoading(true);
  // }, []);
  ///////////////////////////////////////////////////////////////////////

  // TESTING JSON DATA CODE ///////////////////////////////////////////////
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchPopularMovies = () => {
      const response = mostPopularMovies.items;
      setMovies(response);
    };
    fetchPopularMovies();
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  ////////////////////////////////////////////////////////////////

  return (
    <div>
      <MoviePagination movies={movies} />
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>
        MOST POPULAR MOVIES
      </h2>
      {/* WORKING CODE (FETCH MOST POPULAR MOVIES) */}
      {/* {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        movies && <PopularMovies movies={movies} location={location} />
      )} */}
      {/* ////////////////// TESTING JSON DATA CODE /////////////////////////////// */}
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <PopularMovies movies={movies} location={location} />
      )}
    </div>
  );
};

export default HomePage;
