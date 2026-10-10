import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="navbar">
      <Link to="/" className="brand"><span className="brand-mark">✿</span><span>paradise<span className="brand-light">nursery</span></span></Link>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-nav">Cart <span className="cart-badge">{count}</span></NavLink>
      </nav>
    </header>
  );
}
