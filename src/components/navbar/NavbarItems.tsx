"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
interface NavbarItemsInterface {
  title: string;
  param: string;
}

const NavbarItems: React.FC<NavbarItemsInterface> = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold transition-colors duration-200 ${
          genre === param
            ? "underline decoration-4 underline-offset-8 decoration-amber-500 rounded-lg"
            : ""
        } `}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItems;
