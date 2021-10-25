import React from "react";
import { MenuList } from "./Menu/MenuList";
import { MenuToggler } from "./Menu/MenuToggler";
import { Logo } from "./logo/Logo";
import { Cart } from "../cart";
import { Profile } from "./profile";

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <header>
      {/* Nav bar */}
      <nav className="relative flex items-center justify-between p-6 md:border-b ">
        {/* Primary Menu */}
        <div className="flex space-x-4 md:space-x-8 md:flex-row-reverse">
          {/* Menu Toggler */}
          <MenuToggler isOpen={isOpen} setIsOpen={setIsOpen} />

          {/* Menu List */}
          <MenuList isOpen={isOpen} setIsOpen={setIsOpen} />

          {/* Logo */}
          <Logo />
        </div>

        {/* Secondary nav */}
        <nav className="flex items-center justify-between space-x-4">
          <Cart />
          <Profile />
        </nav>
      </nav>
    </header>
  );
};
