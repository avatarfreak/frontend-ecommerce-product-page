import React from "react";
import { Buttons } from "../lightbox/Buttons";
import { Carousel } from "../lightbox/Carousel";
import { product } from "../lightbox/ImagesData";
import { Thumbnail } from "../lightbox/Thumbnail";

const ModalCarousel = () => {
  const [index, setIndex] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [xPosition, setXPosition] = React.useState(0);

  const slideRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth]);

  //Image to preview previous
  const handleClickPrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };

  //Image to preview next
  const handleClickNext = () => {
    if (index === product.original.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };

  return (
    <div className="relative max-w-lg m-auto">
      <Carousel
        images={product.original}
        setWidth={setWidth}
        xPosition={xPosition}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
      <Buttons handleClickNext={handleClickNext} handleClickPrev={handleClickPrev} />
      <div className="flex justify-around mt-12">
        {product.thumbnail.map((thumb, idx) => (
          <Thumbnail
            key={idx}
            idx={idx}
            img={thumb}
            setIndex={setIndex}
            index={index}
            width={width}
            setXPosition={setXPosition}
          />
        ))}
      </div>
    </div>
  );
};


export { ModalCarousel };
