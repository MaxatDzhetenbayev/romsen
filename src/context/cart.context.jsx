import { createContext,  useMemo, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const openCart = () => {
    setOpen(true);
  };
  const closeCart = () => {
    setOpen(false);
  };

  const [products, setProducts] = useState([]);
  const addToCart = (product) => {
    if (!isProductAdded(product.id)) {
      setProducts([...products, { ...product, quantity: 1, defaultPrice : product.price }]);
      return;
    }
    increaseQuantity(product.id);
  };
  const removeFromCart = (productId) => {
    if (!isProductAdded(productId)) {
      return;
    }
    decreaseQuantity(productId);
  };
  const totalPrice = useMemo(() => {
    let res = 0;
    products.forEach((p) => {
      res += p.price;
    });
    return res;
  }, [products]);
  const isProductAdded = (productId) => {
    return products.findIndex(({ id }) => id === productId) !== -1;
  };
  const increaseQuantity = (productId) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          return {
            ...p,
            quantity: p.quantity + 1,
            price: p.price + p.defaultPrice ,
          };
        } else {
          return p;
        }
      })
    );
  };
  const decreaseQuantity = (productId) => {
    setProducts((prev) =>
      prev
        .map((p) => {
          if (p.id === productId) {
            return {
              ...p,
              quantity: p.quantity - 1,
              price: p.price - p.defaultPrice,
            };
          } else {
            return p;
          }
        })
        .filter((p) => p.quantity !== 0)
    );
  };
  return (
    <CartContext.Provider
      value={{
        open,
        totalPrice,
        openCart,
        closeCart,
        products,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
