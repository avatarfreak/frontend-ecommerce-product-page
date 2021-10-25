import Link from "next/link";
import React from "react";

interface IItem {
  item: string;
}

const MenuItem: React.FC<IItem> = ({ item }) => {
  return (
    <li className="menu-item ">
      <Link href="#!">
        <a>{item}</a>
      </Link>
    </li>
  );
};

export { MenuItem };
