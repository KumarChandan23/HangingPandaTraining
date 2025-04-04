// ProductList.js (Optimized)
import React, { useState, useCallback } from 'react';
import ProductCard from './Card';

const products = [
  { id: 1, name: 'Phone' },
  { id: 2, name: 'Laptop' },
];

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);
  const handleAddToCart1 = (product)=> {
    setCart((prev) => [...prev, product]);
  }
  console.log(cart)
  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
