import React, { Suspense } from "react";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  return (
    <div className="flex gap-x-3 items-center justify-center mx-auto md:textlg bg-amber-200 dark:bg-gray-600 p-3 ">
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarItems title="Trending" param="fetchTrending" />
        <NavbarItems title="Top Rated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
};

export default Navbar;
