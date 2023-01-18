import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './common/Header';

export const Layout = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Header />
        <Outlet />
      </Suspense>
    </div>
  );
};
