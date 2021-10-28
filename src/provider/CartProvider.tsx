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

      //Getting unique Id from time
      const id = Number(new Date().getTime());

      //if carts is not empty then update the cart quantity
      quantity = (carts.length > 0)
         ? (carts.reduce((acc, cart) => { acc = [cart.quantity + quantity]; return acc }, [0])[0])
         : (quantity);

      dispatch({ type: Types.add, payload: { id, product, price, quantity } });
   };

   //Delete cart from list preview
   const removeProduct = () => {
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
