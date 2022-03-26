import React from 'react';

const Product = ({ product }) => {
  console.log(product);
  const { name, company, picture, price } = product;
  return (
    <div>
      <img className="w-1/3" src={picture} alt="" />
      <h1> {name}</h1>
    </div>
  );
};

export default Product;
