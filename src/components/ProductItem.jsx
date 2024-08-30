import React from 'react';
import './ProductItem.css';

const ProductItem = ({ name, price, description, onViewDetails }) => {
  return (
    <div className="product-item">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
      <button onClick={onViewDetails}>Ver Detalles</button>
    </div>
  );
};

export default ProductItem;
