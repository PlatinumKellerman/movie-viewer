import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './layout/Layout';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
