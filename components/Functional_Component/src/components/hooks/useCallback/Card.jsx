// ProductCard.js
import React from 'react';

const ProductCard = React.memo(({ product, onAddToCart }) => {
  console.log('Rendering:', product.name);
  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
});

export default ProductCard;
