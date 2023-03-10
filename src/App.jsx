import './App.css';
import Container from './layout/common/Container/Container';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './layout/Layout';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/Home';
import MovieInfo from './pages/MovieInfo';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/movie-viewer" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MovieInfo />}></Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
