"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`search/${search}`);
    setSearch("");
  };
  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter keywords..."
        className="w-full outline-none border-none h-14 flex-1 bg-transparent placeholder-gray-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-500 disabled:text-gray-600 font-semibold"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
