import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import AsideBar from './common/AsideBar';
import Header from './common/Header';
// import Snow from './common/Snowfall';    ------- snow off (winter is over :D)

export const Layout = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading page...</div>}>
        {/* <Snow />                   ------- snow off (winter is over :D) */}
        <Header />
        {/* <AsideBar /> */}
        <Outlet />
      </Suspense>
    </div>
  );
};
