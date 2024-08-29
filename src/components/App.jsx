import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
// import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Producto 1', price: 10, description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', price: 20, description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', price: 30, description: 'Descripción del Producto 3' },
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
