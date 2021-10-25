import React from "react";
import { dataContext } from "@/context/dataContext";

//Bottom Section
const PriceDetails = () => {
  const { collection } = React.useContext(dataContext);

  return (
    <div
      className="flex justify-between items-center space-x-8
      md:justify-start
      md:flex-wrap
      md:space-x-0
      "
    >
      {/* Price  */}
      <h3 className="text-2xl text-neutral-100 text-3xl font-bold md:mr-4">
        <span>$</span>
        {collection.discountedPrice[0]}.00
      </h3>

      {/* discount */}
      <span
        className="bg-pri-110 text-pri-100 rounded-lg py-1 px-3 font-bold
        mr-4 block
        "
      >
        {collection.discount}
      </span>

      {/* strike price */}
      <span
        className="line-through text-neutral-120 font-bold text-base 
        md:w-full
        md:mt-2
        "
      >
        ${collection.price[0]}.00
      </span>
    </div>
  );
};

// Top Section
const PageContent = () => {
  const { collection } = React.useContext(dataContext);

  return (
    <section>
      {/* Sub Title */}
      <p className="text-pri-100 text-base uppercase py-6 text-xs font-bold md:text-sm md:tracking-wider">
        {collection.subTitle}
      </p>

      {/* Title */}
      <h2 className="text-3xl text-neutral-100 font-bold md:text-5xl">{collection.title}</h2>

      {/* Description */}
      <p className="text-neutral-110 py-6"> {collection.description} </p>

      <PriceDetails />
    </section>
  );
};

export { PageContent };
