import { CartContext } from "@/context/CartContext";
import { ICartState } from "interfaces/interfaces";
import React from "react";
import { cartReducer } from "reducer/cartReducer";
import { Types } from "Types/types";

//Default value
const initialState: ICartState = {
  carts: [],
};

//Cart Provider
const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);
  const [isCardActive, setIsCardActive] = React.useState<boolean>(false);

  const { carts } = state;

  //Add cart to list preview
  const addProduct = (quantity: number, price: number, product: string) => {
    const id = Number(new Date().getTime());

    dispatch({ type: Types.add, payload: { id, product, price, quantity } });
  };

  //Delete cart from list preview
  const removeProduct = (id: number) => {
    dispatch({ type: Types.remove });
  };

  return (
    <CartContext.Provider
      value={{
        carts,
        addProduct,
        removeProduct,
        isCardActive,
        setIsCardActive,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
