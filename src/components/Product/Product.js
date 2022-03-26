import React from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Product = ({ product, addToCart }) => {
  // console.log(product);
  const { name, company, picture, price } = product;
  return (
    <div className="shadow-md border-2 p-3 rounded-md">
      <img className="w-11/12 mx-auto h-40" src={picture} alt="" />
      <h3 className="text-lg font-semibold mt-2"> {name}</h3>
      <h3 className="text-base font-semibold mt-2">
        Company: <span className="font-bold">{company}</span>
      </h3>
      <h3 className="text-base font-semibold mt-2">
        Price:
        <small className="text-sm pl-2 font-bold">{price}</small>
      </h3>

      <button
        onClick={() => addToCart(product)}
        className="bg-red-400 justify-center align-middle flex py-3 px-4 rounded-md mt-3 w-5/6 mx-auto ml-4 text-white font-semibold"
      >
        <h3> Add To Cart</h3>
        <span className="ml-3">
          <BsFillCartCheckFill />
        </span>
      </button>
    </div>
  );
};

export default Product;
