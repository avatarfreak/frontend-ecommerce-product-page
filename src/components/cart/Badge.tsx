import { useCart } from "@/context/useCart";
import React from "react";

const Badge = () => {
   const { quantity } = useCart();
   return (
      <div>
         {quantity > 0 ? (
            <span className="absolute -top-1 -right-2 h-[0.8125rem] w-[1.125rem] rounded-full bg-pri-100 flex justify-center items-center">
               <p className="text-neutral-140 text-10px font-bold pointer-events-none" aria-live="polite">
                  {quantity}
               </p>
            </span>
         ) : (
            ""
         )}
      </div>
   );
};

export { Badge };
