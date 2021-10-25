import { useMediaQuery } from "hooks/useMediaQuery";
import React from "react";
import { Modal } from "../modal/Modal";
import { ModalCarousel } from "../modal/ModalCarousel";
import { Carousel } from "./Carousel";
import { product } from "./ImagesData";
import { Thumbnail } from "./Thumbnail";

const LightBox = () => {
  const [index, setIndex] = React.useState<number>(0);
  const [xPosition, setXPosition] = React.useState<number>(0);
  const [width, setWidth] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

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
    <div className="sm:flex sm:flex-col sm:flex-1 w-full ">
      {!isDesktop ? (
        <Carousel
          images={product.original}
          setWidth={setWidth}
          xPosition={xPosition}
          handleClickPrev={handleClickPrev}
          handleClickNext={handleClickNext}
        />
      ) : (
        <>
          <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
            <Carousel
              images={product.original}
              setWidth={setWidth}
              xPosition={xPosition}
              handleClickPrev={handleClickPrev}
              handleClickNext={handleClickNext}
            />
          </div>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <ModalCarousel />
          </Modal>
        </>
      )}

      {/* Thumbnail */}
      <div className="my-4 space-x-7 flex items-center justify-center">
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

export default LightBox;
