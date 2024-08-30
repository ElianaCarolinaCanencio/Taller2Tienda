import React from 'react';
import './ProductItem.css';
const ProductDetails = ({ product, onAddToCart }) => {
  if (!product) {
    return <div className="product-details">Selecciona un producto para ver los detalles.</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => onAddToCart(product)}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductDetails;
