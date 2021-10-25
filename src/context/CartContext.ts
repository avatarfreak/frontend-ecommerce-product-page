import { ICartContext } from "interfaces/interfaces";
import React from "react";

const CartContext = React.createContext<ICartContext>({} as ICartContext);
export { CartContext };
