import React from 'react';

const Product = ({ product }) => {
  console.log(product);
  const { name, company, picture, price } = product;
  return (
    <div className="shadow-md border-2 p-3">
      <img className="w-11/12 mx-auto" src={picture} alt="" />
      <h1> {name}</h1>
    </div>
  );
};

export default Product;
