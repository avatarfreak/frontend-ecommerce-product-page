import React from "react";
import { CartContext } from "./CartContext";

const useCart = () => {
  const { carts, removeProduct, addProduct, isCardActive, setIsCardActive } =
    React.useContext(CartContext);

  return {
    carts: carts,
    price: 125,
    quantity: carts.map((cart) => cart.quantity).slice(-1)[0],
    isCardActive: isCardActive,
    setIsCardActive: setIsCardActive,
    addProduct: addProduct,
    removeProduct: removeProduct,
  };
};

export { useCart };
