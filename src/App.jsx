import './App.css';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './layout/Layout';
import Container from './layout/common/Container/Container';

const HomePage = lazy(() => import('./pages/Home'));
const MovieInfo = lazy(() => import('./pages/MovieInfo'));
const MovieCast = lazy(() => import('./pages/MovieInfo/MovieCast'));
const MovieReviews = lazy(() => import('./pages/MovieInfo/MovieReviews'));
const TvShowsInfo = lazy(() => import('./pages/TvShowsInfo'));
const TvShowReviews = lazy(() => import('./pages/TvShowsInfo/TvShowReviews'));
const TvShowCast = lazy(() => import('./pages/TvShowsInfo/TvShowCast'));
const MediaSearchPage = lazy(() => import('./pages/MediaSearchPage'));
const WeatherPage = lazy(() => import('./pages/WeatherPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/movie-viewer" element={<HomePage />} />
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
