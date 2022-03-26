import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
const Cart = ({ item }) => {
  //   console.log(item);
  const { name, picture } = item;
  return (
    <div className="grid grid-cols-6 items-center mt-3 bg-red-400 py-2 px-2 rounded-3xl">
      <div className="col-span-1">
        <img className="w-10 rounded-full h-10 mr-2" src={picture} alt="" />
      </div>
      <div className="col-span-4">
        <h1 className="text-white font-semibold ml-2 text-sm">{name}</h1>
      </div>
      <div className="col-span-1">
        <AiFillDelete className="text-4xl text-red-900" />
      </div>
    </div>
  );
};

export default Cart;
