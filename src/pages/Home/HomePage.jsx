import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { toast } from 'react-toastify';
import Container from '../../layout/common/Container/Container';
import ScrollArrow from '../../components/ScrollArrow';
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
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    fetchPopularTv();
  }, [shows]);

  useEffect(() => {
    fetchPopularMovies(activePage);
  }, [activePage]);

  const fetchPopularMovies = async activePage => {
    try {
      const [moviesResponse] = await Promise.all([
        getMostPopularMovies(activePage),
      ]);
      setMovies(moviesResponse);
      setIsLoading(false);
    } catch (error) {
      toast.error('Oops! Something went wrong!');
      setIsLoading(false);
    }
  };

  const fetchPopularTv = async () => {
    try {
      const [showResponse] = await Promise.all([getMostPopularTvShows()]);
      setShows(showResponse);
      setIsLoading(false);
    } catch (error) {
      toast.error('Oops! Something went wrong!');
      setIsLoading(false);
    }
  };

  const handlePageChange = (event, newPage) => {
    setActivePage(newPage);
    setIsLoading(true);
    fetchPopularMovies(newPage);
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
          <HomePageTitle
            style={{
              marginTop: '30px',
            }}
          >
            Trending movies for the WEEK
          </HomePageTitle>
          {movies && <PopularMovies movies={movies} location={location} />}
          <ScrollArrow
            sx={{
              display: 'flex',
            }}
          />
        </>
      )}
      <Stack spacing={2}>
        <Pagination
          count={500}
          page={activePage}
          onChange={handlePageChange}
          color="secondary"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '16px',
            marginBottom: '16px',
            '& .MuiPaginationItem-root': {
              color: 'white',
            },
            '& .MuiPaginationItem-page.Mui-selected': {
              backgroundColor: '#61892F',
            },
            '& .MuiPaginationItem-page:hover': {
              backgroundColor: '#61892F',
            },
            '& .MuiPaginationItem-icon:hover': {
              backgroundColor: '#61892F',
            },
          }}
        />
      </Stack>
    </Container>
  );
};

export default HomePage;
