import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  //   console.log(cart[0].id);
  // add to cart function
  const addToCart = (product) => {
    const newCart = [...cart, product];
    const exists = cart.find((pd) => pd.id === product.id);
    if (newCart.length > 4) {
      alert('You can not select more then four items.');
    } else if (!exists) {
      setCart(newCart);
    } else {
      alert('This Product is allready exist.');
    }
  };
  // functio to remove all item
  const removeItem = () => {
    const emtyCart = [];
    setCart(emtyCart);
  };

  // choose one for me function
  const selectRandom = () => {
    const doMath = Math.floor(Math.random() * 4);

    const selectItem = cart[doMath];
    const item = [selectItem];

    setCart(item);
  };

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-12 w-11/12 m-auto gap-5">
      <div className="col-span-9 ">
        <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 sm:grid-cols-1 mt-12">
          {products.map((product) => (
            <Product addToCart={addToCart} key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="col-span-3 mt-10">
        <h2 className="font-semibold text-2xl">Selected Items</h2>
        {cart.map((item) => (
          <Cart key={item.id} item={item}></Cart>
        ))}
        <div>
          <button
            onClick={selectRandom}
            className="bg-green-600 text-white py-2 px-4 rounded-md mt-5"
          >
            Choose One For Me
          </button>
        </div>
        <div onClick={removeItem} className="mt-3">
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-md w-40">
            Choose Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
