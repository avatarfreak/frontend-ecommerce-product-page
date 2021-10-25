import { useCart } from "@/context/useCart";
import React from "react";
import { AddCartButton } from "./AddCartButton";
import { IncrementDecrementButton } from "./IncrementDecrementButton";

const AddCart = () => {
  const { addProduct } = useCart();
  const [quantity, setQuantity] = React.useState<number>(0);

  //Add quantity
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  //minus quantity
  const handleDecrement = () => {
    if (quantity === 0) return;

    setQuantity((prev) => prev - 1);
  };

  //AddToCart
  const addToCart = () => {
    let price = 125;

    if (quantity === 0) {
      addProduct(0, price, "image-product-1-thumbnail.jpg");
      return;
    }
    addProduct(quantity, price, "image-product-1-thumbnail.jpg");
    setQuantity(0);
  };

  return (
    <div className="w-full md:flex md:space-x-4">
      <IncrementDecrementButton
        quantity={quantity}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />

      <AddCartButton addToCart={addToCart} />
    </div>
  );
};

export { AddCart };
