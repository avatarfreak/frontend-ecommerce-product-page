/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useCart } from "@/context/useCart";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH;

const CartDetails = () => {
  const { quantity, price, removeProduct } = useCart();
  return (
    <>
      <div className="flex  py-6 space-x-4">
        {/* Image */}
        <div className="flex-flex-shrink-0">
          <img
            src={`${prefix}/images/image-product-1-thumbnail.jpg`}
            alt="sneaker"
            width="50"
            height="50"
          />
        </div>
        {/* Description */}
        <div className="text-neutral-110 font-base flex-auto w-full">
          <p>Autumn Limited Edition...</p>
          <p>
            {`${price}.00 x ${quantity}`}
            <span className="font-bold text-neutral-100 text-base">
              {`  $${price * quantity}.00 `}
            </span>
          </p>
        </div>
        `{/* trash */}
        <button onClick={() => removeProduct()} className="btn">
          <img src={`${prefix}/images/icon-delete.svg`} alt="delete items" height="18" width="14" />
        </button>
      </div>
      {/* Button */}
      <button className="btn pgt-hover bg-pri-100 text-center w-full py-4 rounded-xl text-neutral-140 font-bold ">
        Checkout
      </button>
    </>
  );
};

const CartDisplay = () => {
  const { quantity, isCardActive } = useCart();
  return (
    <>
      {isCardActive && (
        <div
          className="max-w-96 w-11/12 absolute -top-1 overflow-hidden shadow-2xl rounded-2xl
        sm:right-2
        "
        >
          <div className="  left-0 w-full bg-neutral-130 py-6  rounded-xl">
            {/* Top Section */}
            <h4 className="top pb-6 border-b font-bold px-6 ">Cart</h4>

            {/* Bottom Section */}
            {quantity > 0 ? (
              <div className="px-6">
                <CartDetails />
              </div>
            ) : (
              <p className="text-center py-12 font-bold text-neutral-110 ">Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export { CartDisplay };
