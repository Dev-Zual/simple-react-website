import React from 'react';

const Cart = ({ item }) => {
  console.log(item);
  const { name, picture } = item;
  return (
    <div className="flex items-center mt-3 bg-red-400 py-2 px-2 rounded-3xl">
      <img className="w-10 rounded-full h-10 mr-2" src={picture} alt="" />
      <h1 className="text-white font-semibold ml-2 text-lg">{name}</h1>
    </div>
  );
};

export default Cart;
