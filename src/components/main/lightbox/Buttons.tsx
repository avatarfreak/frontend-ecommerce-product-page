import React from "react";

interface IButtons {
   handleClickPrev: () => void;
   handleClickNext: () => void;
}

const Buttons: React.FC<IButtons> = (props) => {
   const { handleClickPrev, handleClickNext } = props;
   return (
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-3 sm:px-0 sm: -translate-y-full sm:-mt-13">
         <button
            onClick={handleClickPrev}
            aria-label="goto previous image"
            className="nav btn  inline-block flex items-center justify-center h-11 w-11 rounded-full bg-neutral-140"
         >
            <svg width="12" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
               <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
            </svg>
         </button>

         <button
            onClick={handleClickNext}
            aria-label="goto next image"
            className="nav btn next inline-block flex items-center justify-center h-11 w-11 rounded-full bg-neutral-140"
         >
            <svg
               aria-hidden="true"
               width="13"
               height="18"
               xmlns="http://www.w3.org/2000/svg"
               className="hover:text-pri-100"
            >
               <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
            </svg>
         </button>
      </div>
   );
};

export { Buttons };
