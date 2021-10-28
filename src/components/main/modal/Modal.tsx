import React from "react";
import { createPortal } from "react-dom";

interface IModal {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<IModal> = ({ isOpen, setIsOpen, children }) => {
   const [mounted, setMounted] = React.useState(false);

   React.useEffect(() => {
      setMounted(true);
      return () => setMounted(false);
   }, []);

   if (!isOpen) return null;
   return mounted
      ? createPortal(
         <div className="fixed inset-0 bg-black/75 hidden sm:block z-50">
            <div className="fixed inset-0 flex items-center justify-center">
               <div className=" max-w-lg w-full z-50">
                  <div className="flex justify-end mr-5">
                     <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="close p-2 btn"
                     >
                        <span className="sr-only">close</span>
                        <svg
                           width="14"
                           height="15"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                              fill="#fff"
                              fillRule="evenodd"
                           />
                        </svg>
                     </button>
                  </div>
                  <div className="w-full">{children}</div>
               </div>
            </div>
         </div>,
         document.getElementById("modal")!
      )
      : null;
};

export { Modal };
