export interface ICart {
  id: number;
  product: string;
  price: number;
  quantity: number;
}

export interface ICartContext {
  carts: ICart[];
  addProduct: (qty: number, price: number, prd: string) => void;
  removeProduct: () => void;
  isCardActive: boolean;
  setIsCardActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICartState {
  carts: ICart[];
}
