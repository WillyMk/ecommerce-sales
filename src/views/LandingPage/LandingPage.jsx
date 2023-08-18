import React from 'react';
import Footer from './Footer';
import Slider from './Slider';
import Navbar from './Navbar';
import Social from './Social';
import Products from './Products';

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <Slider />
        <Products />
        <Social />
        <Footer />
    </>
  );
};

export default LandingPage;
