import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './layout/Layout';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
