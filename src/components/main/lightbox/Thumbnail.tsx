import React from "react";
import Image from "next/image";

interface IThumbnail {
  img: string;
  idx: number;
  index: number;
  width: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setXPosition: React.Dispatch<React.SetStateAction<number>>;
}

const Thumbnail: React.FC<IThumbnail> = ({
  img,
  idx,
  index,
  setIndex,
  width,
  setXPosition,
}) => {
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
        <Image
          src={`/images/${img}`}
          alt={img}
          width="92"
          height="92"
          className={` rounded-xl  ${
            index === idx ? "opacity-50" : "opacity-100"
          } `}
        />
      </button>
    </div>
  );
};

export { Thumbnail };
