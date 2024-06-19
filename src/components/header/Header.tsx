import React from "react";
import MenuItems from "./MenuItemsLeft";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItemsRight from "./MenuItemsRight";
import DarkModeSwitcher from "../DarkModeSwitcher";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-2">
        <MenuItems title={"Home"} address="/" Icon={<AiFillHome />} />
        <MenuItems
          title={"About"}
          address="/about"
          Icon={<BsFillInfoCircleFill />}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <DarkModeSwitcher />
        <MenuItemsRight />
      </div>
    </div>
  );
};

export default Header;
