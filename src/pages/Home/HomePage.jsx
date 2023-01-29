import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { getMostPopularMovies } from '../../services/fetchMovies';
import PopularMovies from '../../components/PopularMovies/PopularMovies';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await getMostPopularMovies();
        setMovies(response);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    getPopularMovies();
    setIsLoading(true);
  }, []);

  console.log(movies);
  console.log(isLoading);

  return (
    <div>
      <p>HOME PAGE</p>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        movies && <PopularMovies movies={movies} location={location} />
      )}
    </div>
  );
};

export default HomePage;
