import React from "react";
import { Buttons } from "./Buttons";

interface ICarousel {
  images: Array<string>;
  handleClickPrev: () => void;
  handleClickNext: () => void;
  xPosition: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
}
const prefix = process.env.NEXT_PUBLIC_BASE_PATH;

const Carousel: React.FC<ICarousel> = (props) => {
  const { images, handleClickPrev, handleClickNext, setWidth, xPosition } = props;

  const slideRef = React.useRef<HTMLDivElement | null>(null);

  const resizeHandler = React.useCallback(() => {
    slideRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
    const width = slideRef.current?.clientWidth!;

    setWidth(width);
    handleClickPrev();
  }, [slideRef, handleClickPrev, setWidth]);

  React.useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
    window.onresize = resizeHandler;
    //Remove event listener on cleanup
  }, [setWidth, resizeHandler]);

  return (
    <>
      <div className="relative  sm:max-w-[29rem] m-auto overflow-hidden sm:rounded-xl shadow-md">
        <div
          ref={slideRef}
          style={{
            transform: `translateX(${xPosition}px)`,
          }}
          className="flex  transform duration-500 transition w-full"
        >
          {images.map((img, idx) => (
            <img key={idx} src={`${prefix}/images/${img}`} alt={img} />
          ))}
        </div>

        <div className="sm:hidden">
          <Buttons handleClickNext={handleClickNext} handleClickPrev={handleClickPrev} />
        </div>
      </div>
    </>
  );
};
export { Carousel };
