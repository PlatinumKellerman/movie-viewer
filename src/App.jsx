import './App.css';
import Container from './layout/common/Container/Container';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './layout/Layout';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import TvShowsInfo from 'pages/TvShowsInfo';
import MediaSearchPage from './pages/MediaSearchPage';
import MovieReviews from 'pages/MovieInfo/MovieReviews';
import MovieCast from 'pages/MovieInfo/MovieCast';
import TvShowReviews from 'pages/TvShowsInfo/TvShowReviews';
import TvShowCast from 'pages/TvShowsInfo/TvShowCast';
import WeatherPage from 'pages/WeatherPage';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movie-viewer/movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route
            path="/movie-viewer/tv-shows/:showId"
            element={<TvShowsInfo />}
          >
            <Route path="reviews" element={<TvShowReviews />} />
            <Route path="cast" element={<TvShowCast />} />
          </Route>
          <Route
            path="/movie-viewer/search"
            element={<MediaSearchPage />}
          ></Route>
          <Route path="/movie-viewer/weather" element={<WeatherPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
