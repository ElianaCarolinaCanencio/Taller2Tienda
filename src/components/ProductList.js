import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onViewDetails }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          onViewDetails={() => onViewDetails(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
