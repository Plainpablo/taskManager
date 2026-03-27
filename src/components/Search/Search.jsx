import React, { useEffect, useRef } from "react";
import { useSearch } from "../../context/SearchContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchControlBtn from "./Controls/SearchControlBtn";

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
      title: "Go to home",
      shortcutLeft: "G",
      shortcutRight: "K",
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Go to Today",
      shortcutLeft: "G",
      shortcutRight: "T",
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Go to Upcoming",
      shortcutLeft: "G",
      shortcutRight: "U",
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Go to Completed",
      shortcutLeft: "G",
      shortcutRight: "C",
    },
  ];

  return (
    <div
      ref={searchRef}
      className={`fixed z-20 flex-col w-full max-w-[650px] right-0 left-0 mx-auto top-[calc(13vh-32px)]  bg-white shadow-[0_15px_50px_rgba(0,0,0,0.35)] rounded-[10px] h-fit ${isSearchOpen ? "flex" : "hidden"}`}
    >
      <div className="flex flex-col">
        <div className=" px-3 flex w-full h-[50px] justify-center items-center border-b-[1px] border-[#f5f5f5]">
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

        <div className="flex flex-col max-h-[calc(100vh-13vh*2)] overflow-y-auto">
          <div>
            <p className="text-[#666] text-xs pl-3 pt-3 pr-1 pb-1 text-start">
              Navigation
            </p>
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Go to home"
              shortcutLeft="G"
              shortcutRight="K"
              thenText
            />
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Go to Today"
              shortcutLeft="G"
              shortcutRight="T"
              thenText
            />
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Go to Upcoming"
              shortcutLeft="G"
              shortcutRight="U"
              thenText
            />
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Go to Completed"
              shortcutLeft="G"
              shortcutRight="C"
              thenText
            />
          </div>

          <div className="border-y-[1px] border-y-[#f5f5f5]">
            <p className="text-[#666] text-xs pl-3 pt-3 pr-1 pb-1 text-start">
              Add
            </p>
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Add task"
              shortcutRight="Q"
            />
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Add project"
              shortcutLeft="Alt"
              shortcutRight="P"
            />
          </div>

          <div className="border-y-[1px] border-y-[#f5f5f5]">
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Show/hide completed tasks"
            />
          </div>

          <div className="border-y-[1px] border-y-[#f5f5f5]">
            <p className="text-[#666] text-xs pl-3 pt-3 pr-1 pb-1 text-start">
              Templates
            </p>
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Import from CSV"
            />
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Export as CSV"
            />
          </div>

          <div className="border-y-[1px] border-y-[#f5f5f5]">
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Open user menu"
              shortcutLeft="O"
              shortcutRight="U"
              thenText
            />
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Open settings"
              shortcutLeft="O"
              shortcutRight="S"
              thenText
            />
          </div>

          <div className="border-y-[1px] border-y-[#f5f5f5]">
            <p className="text-[#666] text-xs pl-3 pt-3 pr-1 pb-1 text-start">
              Help
            </p>
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Show keyboard shortcuts"
              shortcutRight="?"
            />
          </div>
          <div className="border-y-[1px] border-y-[#f5f5f5]">
            <p className="text-[#666] text-xs pl-3 pt-3 pr-1 pb-1 text-start">
              Miscellaneous
            </p>
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Print current view"
              shortcutLeft="Ctrl"
              shortcutRight="P"
            />
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Open/close sidebar"
              shortcutRight="M"
            />
          </div>

          <div className="border-y-[1px] border-y-[#f5f5f5]">
            <p className="text-[#666] text-xs pl-3 pt-3 pr-1 pb-1 text-start">
              Settings
            </p>
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="General"
              shortcutLeft="O"
              shortcutRight="S"
              thenText
            />
            <SearchControlBtn
              Icon={MagnifyingGlassIcon}
              title="Backups"
              shortcutRight="M"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
