import React, { Suspense } from "react";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex gap-x-3 items-center justify-center mx-auto md:textlg bg-amber-200 dark:bg-gray-600 p-3 ">
        <NavbarItems title="Trending" param="fetchTrending" />
        <NavbarItems title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  );
};

export default Navbar;
