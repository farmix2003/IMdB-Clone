import Link from "next/link";
import React from "react";

const MenuItemsRight = () => {
  return (
    <div>
      <Link href={"/"} className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-amber-500 rounded-lg py-1 px-2">
          IMDb
        </span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
    </div>
  );
};

export default MenuItemsRight;
