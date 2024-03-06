import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const openCart = () => {
    setOpen(true);
  };
  const closeCart = () => {
    setOpen(false);
  };
  const [products, setProducts] = useState([
    {
      img: "/sets/philalove.png",
      name: "Филадельфия LOVE сет",
      grams: "1000",
      pieces: "40",
      price: "1479",
      quantity: 1,
    },
   
  ]);
  const addToCart = () => {};
  const removeFromCart = () => {};
  return (
    <CartContext.Provider
      value={{
        open,
        totalPrice: 100,
        openCart,
        closeCart,
        products,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
