import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
// import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'IPHONE', price: 100, description: 'Diseñado para conquistarte' },
    { id: 2, name: 'MAC', price: 200, description: 'Increíblemente delgado y rápido, para trabajar, jugar y crear en cualquier lugar' },
    { id: 3, name: 'IPAD', price: 300, description: 'Oportunidad para crear' },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <h1>Tienda de Productos</h1>
      <div className="main-content">
        <ProductList products={products} onViewDetails={handleViewDetails} />
        <ProductDetails product={selectedProduct} onAddToCart={handleAddToCart} />
        <Cart cartItems={cart} />
      </div>
    </div>
  );
};

export default App;
