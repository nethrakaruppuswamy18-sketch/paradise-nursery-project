import React from 'react';
export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-photo" role="img" aria-label="Indoor plants by a sunny window" />
      <div className="about-copy">
        <p className="eyebrow">OUR STORY</p>
        <h2>A greener home starts <em>here.</em></h2>
        <p>At Paradise Nursery, we believe plants make everyday spaces feel calmer, brighter, and more connected to nature. We help every plant lover—from beginners to experienced gardeners—find a plant that suits their home and lifestyle.</p>
        <p>Explore leafy favourites, easy-care succulents, and beautiful flowering plants. Our mission is simple: help more people grow a little happiness, one plant at a time.</p>
        <LinkFallback />
      </div>
    </section>
  );
}
function LinkFallback() {
  return <a className="text-link" href="/plants">Explore our plants ↗</a>;
}
