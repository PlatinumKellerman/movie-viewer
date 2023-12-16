import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import AsideBar from './common/AsideBar';
import Header from './common/Header';
import Snow from './common/Snowfall';

export const Layout = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Snow />
        <Header />
        {/* <AsideBar /> */}
        <Outlet />
      </Suspense>
    </div>
  );
};
