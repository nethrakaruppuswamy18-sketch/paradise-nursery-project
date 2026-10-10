import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs.jsx';
import Navbar from './components/Navbar.jsx';
import ProductList from './pages/ProductList.jsx';
import CartItem from './pages/CartItem.jsx';

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">A LITTLE MORE GREEN, EVERY DAY</p>
          <h1>Paradise <span>Nursery</span></h1>
          <p className="hero-copy">Bring nature home. Find your perfect plant and create a space that feels alive.</p>
          <Link className="button button-light" to="/plants">Get Started <span>→</span></Link>
        </div>
        <div className="hero-note">GROW SOMETHING GOOD</div>
      </section>
      <AboutUs />
    </main>
  );
}

export default function App() {
  return <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Home />} />
    </Routes>
    <footer className="footer">© {new Date().getFullYear()} Paradise Nursery · Grow happy, live greener.</footer>
  </>;
}
