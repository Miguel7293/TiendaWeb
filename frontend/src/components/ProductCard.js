import React from 'react';

const ProductCard = ({ product }) => {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} añadido al carrito`);
  };

  return (
    <div className="card h-100 shadow-sm">
      <img src={product.image} className="card-img-top" alt={product.name} style={{ height: 180, objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price.toFixed(2)}</p>
        <button onClick={addToCart} className="btn btn-success mt-auto">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;
