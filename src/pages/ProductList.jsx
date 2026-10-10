import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../features/CartSlice.jsx';
import { plantCategories } from '../data/plants.js';

const imageUrl = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="page-shell">
      <section className="page-heading">
        <p className="eyebrow">THE PLANT COLLECTION</p>
        <h1>Find your <em>green</em> companion.</h1>
        <p>Thoughtfully picked plants to make every room feel more like you.</p>
        <Link to="/cart" className="text-link">View your cart →</Link>
      </section>
      {plantCategories.map((category) => (
        <section className="plant-category" key={category.name}>
          <div className="category-heading">
            <div><h2>{category.name}</h2><p>{category.subtitle}</p></div>
            <span className="plant-count">{category.plants.length} plants</span>
          </div>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const isAdded = addedIds.has(plant.id);
              return (
                <article className="plant-card" key={plant.id}>
                  <div className="plant-image-wrap">
                    <img src={imageUrl(plant.image)} alt={plant.name} loading="lazy"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80'; }} />
                    <span className="plant-tag">HOUSEPLANT</span>
                  </div>
                  <div className="plant-info">
                    <h3>{plant.name}</h3><p>{plant.description}</p>
                    <div className="plant-card-bottom">
                      <strong>₹{plant.price}</strong>
                      <button className={`button button-small ${isAdded ? 'button-added' : ''}`}
                        disabled={isAdded} onClick={() => dispatch(addItem(plant))}>
                        {isAdded ? '✓ Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
