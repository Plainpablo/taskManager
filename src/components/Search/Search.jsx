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

  // Navigation list
  const navigationList = [
    {
      icon: MagnifyingGlassIcon,
      title: "Go to Home",
      shortcutLeft: "G",
      shortcutRight: "K",
    },
  ];

  return (
    <div
      ref={searchRef}
      className={`fixed z-20 flex-col w-full max-w-[650px] right-0 left-0 mx-auto top-[calc(13vh-32px)]  bg-white shadow-[0_15px_50px_rgba(0,0,0,0.35)] rounded-[10px] h-fit ${isSearchOpen ? "flex" : "hidden"}`}
    >
      <div className="flex px-3 flex-col">
        <div className="flex w-full h-[50px] justify-center items-center border-b-[1px] border-[#f5f5f5]">
          <div className="ml-2 size-6 w-6 h-6 flex justify-center items-center">
            <MagnifyingGlassIcon className="size-4 w-4 h-4" />
          </div>
          <input
            className="w-full mx-[14px] outline-none"
            type="text"
            placeholder="Search or type a command..."
          />
          <div>
            <kbd className="px-[5px] mx-[1px] bg-[#00000012] rounded-[3px] text-[#444] font-normal">
              Ctrl
            </kbd>
            <kbd className="px-[5px] mx-[1px] bg-[#00000012] rounded-[3px] text-[#444] font-normal ">
              K
            </kbd>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-[#666] text-xs pl-3 pt-3 pr-1 pb-1 text-start">
            Navigation
          </p>

          {navigationList.map((nav, index) => (
            <div
              key={index}
              className="h-[42px] flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className="ml-2 size-6 w-6 h-6 flex justify-center items-center">
                  <nav.icon className="size-4 w-4 h-4 " />
                </div>
                <p className="text-[13px]">{nav.title}</p>
              </div>

              <div>
                <kbd className="px-[5px] mx-[1px] bg-[#00000012] rounded-[3px] text-[#444] font-normal ">
                  {nav.shortcutLeft}
                </kbd>
                <kbd className="px-[5px] mx-[1px] text-[#444]  font-normal ">
                  then
                </kbd>
                <kbd className="px-[5px] mx-[1px] bg-[#00000012] rounded-[3px] text-[#444] font-normal ">
                  {nav.shortcutRight}
                </kbd>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
