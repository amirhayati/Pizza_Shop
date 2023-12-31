"use client"

import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children } : any) => {
  const [cartItems, setCartItems] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [count, setCount] = useState<number>(1);
  
  const addToCart = (product:any, count:number) => {

    const checkProductInCart = cartItems.find((item:any) => item.id === product.id);
    const checkProductSizeInCart = cartItems.find((item:any) => item.size === product.size);
    const checkProductSauceInCart = cartItems.find((item:any) => item.sauce === product.sauce);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + parseInt(product.price) * count);
    setTotalCount((prevTotalCount) => prevTotalCount + count);

    // ------ use size and sauce if user select same product id whit different size or sauce ------
    if (checkProductInCart && checkProductSizeInCart && checkProductSauceInCart) {
      const updatedCartItems : Array<string | number> = cartItems.map((item:any) => {
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
  
  const onRemove = (pid:number) => {
    const foundProduct:any = cartItems.find((item:any) => item.pid === pid);
    const newCartItems = cartItems.filter((item:any) => item.pid !== pid);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.count);
    setTotalCount((prevTotalCount) => prevTotalCount - foundProduct.count);
    setCartItems(newCartItems);
  };

  // ------- inc or dec cart Item list -------
  const toggleCartItemQuantity = (PID:number, value:"inc" | "dec") => {
    const foundProduct = cartItems.find((item:any) => item.pid === PID);
    const index = cartItems.findIndex((product:any) => product.pid === PID);

    if (value === "inc") {
      setCartItems([...cartItems.slice(0, index), { ...foundProduct, count: foundProduct.count + 1 }, ...cartItems.slice(index + 1)]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + Number(foundProduct.price));
      setTotalCount((prevTotalCount) => prevTotalCount + 1);
    } else if (value === "dec") {
      if (foundProduct.count > 1) {
        setCartItems([...cartItems.slice(0, index), { ...foundProduct, count: foundProduct.count - 1 }, ...cartItems.slice(index + 1)]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - Number(foundProduct.price));
        setTotalCount((prevTotalCount) => prevTotalCount - 1);
      }
    }
  };

  const incCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  
  return (
    <CartContext.Provider
      value={{
        cartItems,
        count,
        totalCount,
        totalPrice,
        addToCart,
        onRemove,
        toggleCartItemQuantity,
        incCount,
        decCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

