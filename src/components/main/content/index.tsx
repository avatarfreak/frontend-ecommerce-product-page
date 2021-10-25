import { AddCart } from "@/component/cart/AddCart";
import { CartDisplay } from "@/component/cart/CartDisplay";
import React from "react";
import { PageContent } from "./PageContent";

const Content = () => {
  return (
    <div className="px-6 flex flex-col items-center justify-center flex-1  w-full">
      <PageContent />
      <AddCart />
      <CartDisplay />
    </div>
  );
};

export default Content;
