import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Container from '../../layout/common/Container/Container';
import Loader from '../../components/Loader';
import {
  getMostPopularMovies,
  getMostPopularTvShows,
} from '../../services/fetchMovies';
import PopularMovies from '../../components/PopularMovies';
import PopularTvShows from '../../components/PopularTvShows';
import { HomePageTitle } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
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

  useEffect(() => {
    const getPopularShows = async () => {
      try {
        const response = await getMostPopularTvShows();
        setShows(response);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };
    getPopularShows();
    setIsLoading(true);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <HomePageTitle>Most popular TV shows</HomePageTitle>
          {shows && <PopularTvShows shows={shows} location={location} />}
          <HomePageTitle>Trending movies for the WEEK</HomePageTitle>
          {movies && <PopularMovies movies={movies} location={location} />}
        </>
      )}
    </Container>
  );
};

export default HomePage;
