"use client"

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [count, setCount] = useState(1);
  
  const addToCart = (product, count) => {
    const checkProductInCart = cartItems.find((item) => item.pid === product.pid);
    const checkProductSizeInCart = cartItems.find((item) => item.size === product.size);
    const checkProductSauceInCart = cartItems.find((item) => item.sauce === product.sauce);
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * count);
    setTotalCount((prevTotalCount) => prevTotalCount + count);

    // ------ use size and sauce if user select same product id whit different size or sauce ------
    if (checkProductInCart && checkProductSizeInCart && checkProductSauceInCart) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.pid === product.pid)
          return {
            ...item,
            count: item.count + count,
          };
        else
          return {
            ...item,
          };
        });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product }]);
      product.count = count;
    }
    setCount(1)
  };
  
  const onRemove = (pid) => {
    const foundProduct = cartItems.find((item) => item.pid === pid);
    const newCartItems = cartItems.filter((item) => item.pid !== pid);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.count);
    setTotalCount((prevTotalcount) => prevTotalcount - foundProduct.count);
    setCartItems(newCartItems);
  };

  // ------- inc or dec cart Item list -------
  const toggleCartItemQuanitity = (id, value) => {
    const foundProduct = cartItems.find((item) => item.pid === id);
    const index = cartItems.findIndex((product) => product.pid === id);

    if (value === "inc") {
      setCartItems([...cartItems.slice(0, index), { ...foundProduct, count: foundProduct.count + 1 }, ...cartItems.slice(index + 1)]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + Number(foundProduct.price));
      setTotalCount((prevTotalcount) => prevTotalcount + 1);
    } else if (value === "dec") {
      if (foundProduct.count > 1) {
        setCartItems([...cartItems.slice(0, index), { ...foundProduct, count: foundProduct.count - 1 }, ...cartItems.slice(index + 1)]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - Number(foundProduct.price));
        setTotalCount((prevTotalcount) => prevTotalcount - 1);
      }
    }
  };

  const incCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decCount = () => {
    setCount((prevCount) => (prevCount > 1 &&  prevCount - 1));
  };

  // ----- add item to localStorage -----
  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);

  // useEffect(() => {
  //   const cartItems = localStorage.getItem("cartItems");
  //   if (cartItems) {
  //     setCartItems(JSON.parse(cartItems));
  //   }
  // }, []);
  
  return (
    <CartContext.Provider
      value={{
        cartItems,
        count,
        totalCount,
        totalPrice,
        addToCart,
        onRemove,
        toggleCartItemQuanitity,
        incCount,
        decCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);