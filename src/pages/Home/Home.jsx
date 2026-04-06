import React from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <NavBar />
      <main>
        <HeroCarousel />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
