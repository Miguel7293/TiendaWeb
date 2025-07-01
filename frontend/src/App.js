import React, { useState, useEffect } from 'react';
import ProductList from './';
import Cart from './components/Cart';
import FloatingCartButton from './components/FloatingCartButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsAndroid(/android/i.test(userAgent));
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">🛒 Catálogo de Productos</h1>
      <ProductList />
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      {isAndroid
        ? <FloatingCartButton onClick={() => setShowCart(true)} />
        : <button className="btn btn-primary mt-4" onClick={() => setShowCart(true)}>Ver Carrito</button>
      }
    </div>
  );
};

export default App;
