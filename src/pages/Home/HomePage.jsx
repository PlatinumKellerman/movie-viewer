import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
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
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [activePage, setActivePage] = useState(1); // Зберігаємо активну сторінку.

  useEffect(() => {
    fetchPopularMedia(activePage); // Отримуємо дані на початковій сторінці.
  }, [activePage]); // Для запуску лише одного разу при завантаженні сторінки.

  const fetchPopularMedia = async activePage => {
    try {
      const [moviesResponse, showsResponse] = await Promise.all([
        getMostPopularMovies(activePage),
        getMostPopularTvShows(),
      ]);
      setMovies(moviesResponse);
      setShows(showsResponse);
      setIsLoading(false);
    } catch (error) {
      toast.error('Oops! Something went wrong!');
      setIsLoading(false);
    }
  };

  const handlePageChange = (event, newPage) => {
    setActivePage(newPage);
    setIsLoading(true);
    fetchPopularMedia(newPage); // Виконуємо запит з новим номером сторінки.
  };

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
          <Stack spacing={2}>
            <Pagination
              count={1000}
              page={activePage}
              onChange={handlePageChange}
            />
          </Stack>
          {movies && <PopularMovies movies={movies} location={location} />}
        </>
      )}
      <Stack spacing={2}>
        <Pagination
          count={1000}
          page={activePage}
          onChange={handlePageChange}
        />
      </Stack>
    </Container>
  );
};

export default HomePage;
