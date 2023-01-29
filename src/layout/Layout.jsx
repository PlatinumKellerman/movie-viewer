import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import AsideBar from './common/AsideBar';
import Header from './common/Header';

export const Layout = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Header />
        {/* <AsideBar /> */}
        <Outlet />
      </Suspense>
    </div>
  );
};
