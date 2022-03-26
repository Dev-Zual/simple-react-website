import React from 'react';

const Product = ({ product }) => {
  console.log(product);
  const { name, company, picture, price } = product;
  return (
    <div className="shadow-md border-2 p-3 rounded-md">
      <img className="w-11/12 mx-auto" src={picture} alt="" />
      <h3 className="text-lg font-semibold mt-2"> {name}</h3>
      <h3 className="text-base font-semibold mt-2">
        Company: <span className="font-bold">{company}</span>
      </h3>
      <h3 className="text-base font-semibold mt-2">
        Price:
        <small className="text-sm pl-2 font-bold">{price}</small>{' '}
      </h3>
    </div>
  );
};

export default Product;
