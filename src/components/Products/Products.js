import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  //   console.log(cart);
  const addToCart = (product) => {
    const newCart = [...cart, product];
    if (newCart.length > 4) {
    } else {
      setCart(newCart);
    }
  };

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-12 w-5/6 m-auto gap-4">
      <div className="col-span-9 ">
        <div className="grid md:grid-cols-3 gap-4 lg:grid-cols-3 sm:grid-cols-1 mt-12">
          {products.map((product) => (
            <Product addToCart={addToCart} key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="col-span-3">
        <h2>Selected Items</h2>
        {cart.map((item) => (
          <Cart key={item.id} item={item}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Products;
