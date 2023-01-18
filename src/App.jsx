import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;
