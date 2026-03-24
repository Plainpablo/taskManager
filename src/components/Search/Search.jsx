import React from "react";
import { useSearch } from "../../context/SearchContext";

const Search = () => {
  const { isSearchOpen, setIsSearchOpen } = useSearch();

  return (
    <div
      className={`fixed z-20 flex-col w-full max-w-[550px] p-8 right-0 left-0 mx-auto top-[calc(13vh-32px)]  bg-white ${isSearchOpen ? "flex" : "hidden"}`}
    >
      <h1>Search </h1>
    </div>
  );
};

export default Search;
