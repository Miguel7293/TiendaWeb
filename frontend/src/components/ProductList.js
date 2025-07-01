import React, { useState } from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  { id: 1, name: 'Auriculares Bluetooth', price: 89.99, image: 'https://oechsle.vteximg.com.br/arquivos/ids/8590434/imageUrl_2.jpg?v=637874930055000000' },
  { id: 2, name: 'Teclado Mecánico RGB', price: 129.99, image: 'https://promart.vteximg.com.br/arquivos/ids/7479097-1000-1000/image-9af968446b50480fade90869c612e40f.jpg?v=638305829355370000' },
  { id: 3, name: 'Mouse Gamer', price: 49.99, image: 'https://media.falabella.com/falabellaPE/125240618_01/w=1500,h=1500,fit=pad' },
  { id: 4, name: 'Monitor Curvo 27"', price: 199.99, image: 'https://media.falabella.com/falabellaPE/129011443_01/w=800,h=800,fit=pad' },
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
