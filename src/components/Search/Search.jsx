import React, { useEffect, useRef } from "react";
import { useSearch } from "../../context/SearchContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  const { isSearchOpen, setIsSearchOpen } = useSearch();
  const searchRef = useRef(null);

  // Listen for outside modal click to close
  useEffect(() => {
    function handleOutSideClick(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }
    if (isSearchOpen) {
      document.addEventListener("mousedown", handleOutSideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [isSearchOpen]);

  return (
    <div
      ref={searchRef}
      className={`fixed z-20 flex-col w-full max-w-[550px] p-8 right-0 left-0 mx-auto top-[calc(13vh-32px)]  bg-white shadow-[0_15px_50px_rgba(0,0,0,0.35)] rounded-[10px] h-fit ${isSearchOpen ? "flex" : "hidden"}`}
    >
      <div className="flex">
        <div className="flex">
            <MagnifyingGlassIcon className="size-6" />
            <input className="w-full" type="text" placeholder="Search or type a command..." />
          <div>
            <kbd className="px-[5px] mx-[1px] bg-[#00000012] rounded-[3px]">Ctrl</kbd>
            <kbd className="px-[5px] mx-[1px] bg-[#00000012] rounded-[3px]">K</kbd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
