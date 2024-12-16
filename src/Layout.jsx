import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {

  return (
    <div >
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <div className='min-w-80 p-20 mt-15'>
        <Outlet /> {/* Dynamic content goes here */}
      </div>

      {/* Footer at the bottom */}
      {/* <Footer /> */}
    </div>
  );
}