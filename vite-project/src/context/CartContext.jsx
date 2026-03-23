import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvide = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const isInCart = cartItem.find((item) => item.id === product.id);

    if (isInCart) {
      toast.info("Item Already in cart");
    } else {
      setCartItem([
        ...cartItem,
        {
          ...product,
          quantity: 1,
          originalPrice: product.price,
        },
      ]);

      toast.success("Item Add to Cart");
    }
  };

  const updateQuantity = (item, id, action) => {
    const updateCart = item.map((item) => {
      if (item.id === id) {
        const quantity =
          action === "increase"
            ? item.quantity + 1
            : Math.max(1, item.quantity - 1);

        return {
          ...item,
          quantity,
          price: quantity * item.originalPrice,
        };
      }

      return item;
    });

    setCartItem(updateCart);
  };

  const deleteItem = (id) => {
    const filteredcart = cartItem.filter((item) => item.id !== id);
    setCartItem(filteredcart);
    toast.success("Item remove form cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        addToCart,
        updateQuantity,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);