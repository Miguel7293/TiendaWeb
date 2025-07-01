import React, { useEffect, useState } from 'react';

const Cart = ({ onClose }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  return (
    <div className="bg-light p-4 rounded shadow mt-4">
      <h4>🛍️ Carrito de Compras</h4>
      <ul className="list-group mb-3">
        {cart.length === 0 && <li className="list-group-item">Tu carrito está vacío.</li>}
        {cart.map((item, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name}
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <button className="btn btn-secondary" onClick={onClose}>Cerrar Carrito</button>
    </div>
  );
};

export default Cart;
