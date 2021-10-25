import { ICart, ICartState } from "interfaces/interfaces";
import { Types } from "Types/types";

type State = ICartState;

type Action = { type: "ADD_CART"; payload: ICart } | { type: "DELETE_CART" };

const cartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.add:
      return { ...state, carts: [...state.carts, action.payload] };

    case Types.remove:
      return {
        carts: state.carts.filter(cart => cart.id === 1),
      };

    default:
      return state;
  }
};

export { cartReducer };
