import React, { useEffect, useState } from 'react';

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
      </div>
      <div className="col-span-3">
        <h2>cart container</h2>
        {products.map((product) => console.log(product))}
      </div>
    </div>
  );
};

export default Products;
