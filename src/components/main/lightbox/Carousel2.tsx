/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Buttons } from "./Buttons";

interface ICarousel {
  getProductId: string;
  images: {
    original: Array<string>;
    thumbnail: Array<string>;
  };
}
const Carousel: React.FC<ICarousel> = ({ images, getProductId }) => {
  const [productId, setProductId] = React.useState<number>(0);
  const [image, setImages] = React.useState<string>("");

  // Total number of the pictures
  const len = images.original.length;

  React.useEffect(() => {
    //get image eg:product-1-thumbnail.jpg
    //perform regex to extract digit from image eg: 1
    //convert to string to int

    let id = getProductId.match(/\d/g)?.slice(0)!;

    if (id) {
      let newId = parseInt(id[0]) - 1;
      setProductId(newId);
    }
  }, [getProductId, setProductId]);

  //Image to preview previous
  const handleClickPrev = () => {
    setProductId((prev) => (prev > 0 ? prev - 1 : len - 1));
  };

  //Image to preview next
  const handleClickNext = () => {
    setProductId((prev) => (prev === len - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div
        className="product flex items-center justify-center relative h-[18.75rem] overflow-hidden 
      sm:rounded-xl sm:h-auto sm:mt-8  
      sm:overflow-visible
      md:flex-1
      
      "
      >
        <img
          src={`/images/${images.original[productId]}`}
          alt={images.original[productId]}
          width="450"
          height="450"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64}`}
          className="sm:rounded-xl"
        />
        <Buttons handleClickPrev={handleClickPrev} handleClickNext={handleClickNext} />
      </div>
    </>
  );
};

export { Carousel };
