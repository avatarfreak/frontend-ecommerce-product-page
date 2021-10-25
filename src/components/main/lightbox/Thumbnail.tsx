/* eslint-disable @next/next/no-img-element */
import React from "react";

interface IThumbnail {
  img: string;
  idx: number;
  index: number;
  width: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setXPosition: React.Dispatch<React.SetStateAction<number>>;
}
const prefix = process.env.NEXT_PUBLIC_BASE_PATH;

const Thumbnail: React.FC<IThumbnail> = ({ img, idx, index, setIndex, width, setXPosition }) => {
  const handleImageId = (id: number) => {
    let nextSlide = width * id;

    if (id === 0) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(id);
      setXPosition(-nextSlide);
    }
  };

  return (
    <div className="hidden sm:block">
      <button
        className={`btn border-2 h-24 rounded-xl ${
          index === idx ? "border-pri-100" : "border-transparent"
        }  `}
        onClick={() => handleImageId(idx)}
      >
        <img
          src={`${prefix}/images/${img}`}
          alt={img}
          width="92"
          height="92"
          className={` rounded-xl  ${index === idx ? "opacity-50" : "opacity-100"} `}
        />
      </button>
    </div>
  );
};

export { Thumbnail };
