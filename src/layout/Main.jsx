import React from 'react';
import {Outlet, useLocation} from 'react-router';
import Navbar from '../pages/shared/navbar/Navbar';
import Footer from '../pages/shared/footer/Footer';

const Main = () => {
  const location = useLocation();

  const hideNavbarFooter =
    location?.pathname.includes('login') ||
    location?.pathname.includes('signup');

  return (
    <div className="max-w-7xl mx-auto">
      {!hideNavbarFooter && <Navbar />}
      <Outlet />
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default Main;
