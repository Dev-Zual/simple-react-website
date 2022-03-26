import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-12 w-5/6 m-auto">
      <div className="col-span-9">
        <h2>this is Products.</h2>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="col-span-3">
        <h2>cart container</h2>
      </div>
    </div>
  );
};

export default Products;
