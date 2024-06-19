import Link from "next/link";
import React from "react";

interface MenuItemsProps {
  title: string;
  address: string;
  Icon: React.ReactNode;
}
const MenuItems: React.FC<MenuItemsProps> = ({ title, address, Icon }) => {
  return (
    <Link href={address} className="hover:text-amber-500 transition-all">
      <p className="text-2xl sm:hidden"> {Icon}</p>
      <p className="uppercase font-semibold hidden sm:inline text-sm">
        {title}
      </p>
    </Link>
  );
};

export default MenuItems;
