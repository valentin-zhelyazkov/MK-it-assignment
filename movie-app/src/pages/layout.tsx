import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/nav';

const Layout = (): React.ReactElement => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;