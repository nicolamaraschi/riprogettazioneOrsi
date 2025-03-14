// src/components/products/ProductCard.js
import React from 'react';

const ProductCard = ({ title, image, description, links = [] }) => {
  return (
    <div className="product">
      <div className="product-title">{title}</div>
      <img src={image} alt={title} className="product-image" />
      <div className="product-description">{description}</div>
      {links.length > 0 && (
        <div className="product-links">
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;