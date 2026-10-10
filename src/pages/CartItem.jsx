import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../features/CartSlice.jsx';

const imageUrl = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=300&q=80`;

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="page-shell cart-page">
      <section className="page-heading cart-heading">
        <p className="eyebrow">YOUR LITTLE GREEN CORNER</p>
        <h1>Shopping <em>Cart</em></h1>
        <p>{count} {count === 1 ? 'plant' : 'plants'} selected for your home.</p>
      </section>
      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-icon">✿</div>
          <h2>Your cart is ready to grow.</h2>
          <p>You haven't added any plants yet. Find a green friend for your space.</p>
          <Link to="/plants" className="button button-primary">Continue Shopping</Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Cart items">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img className="cart-thumb" src={imageUrl(item.image)} alt={item.name} />
                <div className="cart-product-info">
                  <h3>{item.name}</h3>
                  <p>Unit price: ₹{item.price}</p>
                  <button className="remove-button" onClick={() => dispatch(removeItem(item.id))}>Remove item</button>
                </div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button aria-label="Decrease quantity" onClick={() => dispatch(updateQuantity({ id: item.id, change: -1 }))}>−</button>
                  <span>{item.quantity}</span>
                  <button aria-label="Increase quantity" onClick={() => dispatch(updateQuantity({ id: item.id, change: 1 }))}>+</button>
                </div>
                <strong className="line-total">₹{item.price * item.quantity}</strong>
              </article>
            ))}
            <Link to="/plants" className="text-link continue-link">← Continue Shopping</Link>
          </section>
          <aside className="order-summary">
            <p className="eyebrow">ORDER SUMMARY</p><h2>Your total</h2>
            <div className="summary-line"><span>Plants ({count} items)</span><span>₹{total}</span></div>
            <div className="summary-line"><span>Delivery</span><span className="free-delivery">Free</span></div>
            <div className="summary-total"><span>Grand Total</span><strong>₹{total}</strong></div>
            <button className="button button-primary checkout-button"
              onClick={() => window.alert('Coming Soon! Checkout will be available soon.')}>Checkout</button>
            <p className="secure-note">A little greenery is on its way. 🌱</p>
          </aside>
        </div>
      )}
    </main>
  );
}
