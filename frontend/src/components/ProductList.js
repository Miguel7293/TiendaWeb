import React, { useState } from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  { id: 1, name: 'Auriculares Bluetooth', price: 89.99, image: 'https://i.imgur.com/Rx0wwWj.png' },
  { id: 2, name: 'Teclado Mecánico RGB', price: 129.99, image: 'https://i.imgur.com/dFZpQBu.png' },
  { id: 3, name: 'Mouse Gamer', price: 49.99, image: 'https://i.imgur.com/Gq3z6nH.png' },
  { id: 4, name: 'Monitor Curvo 27"', price: 199.99, image: 'https://i.imgur.com/hLE4HnP.png' },
];

const ProductList = () => {
  const [search, setSearch] = useState('');
  const filtered = sampleProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar productos..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="row">
        {filtered.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
