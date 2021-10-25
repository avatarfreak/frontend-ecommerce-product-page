import { dataContext } from "@/context/dataContext";
import React from "react";
import { IMenuList } from "./interfaces";
import { MenuItem } from "./MenuItem";

const MenuList: React.FC<IMenuList> = ({ isOpen, setIsOpen }) => {
  const { collection } = React.useContext(dataContext);

  return (
    <div
      className={`
      ${isOpen ? "block" : "hidden"} fixed inset-0 bg-black/75 z-2
    md:inset-auto
    md:relative
    md:bg-transparent
    md:block
`}
    >
      <ul
        className="
         fixed inset-0 
      w-3/4 font-bold text-lg py-20 px-6  space-y-8 h-full bg-neutral-140 
      md:relative
      md:inset-auto
      md:flex
      md:space-x-6
      md:space-y-0
      md:py-0
      md:h-0
      md:text-base
      md:text-neutral-110
      md:font-normal
      "
      >
        {collection.menu.map((item, idx) => {
          return <MenuItem key={idx} item={item} />;
        })}
      </ul>
    </div>
  );
};

export { MenuList };
