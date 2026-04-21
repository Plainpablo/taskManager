import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Check } from "phosphor-react";
import { useEffect, useRef, useState } from "react";

const CustomDropList = ({ sortOptions, width, height }) => {
  const [currentOption, setCurrentOption] = useState(sortOptions[0]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDownRef = useRef(null);

  // Display clicked option and close drop down
  function handleSelectOption(option) {
    setCurrentOption(option);
    setIsDropDownOpen(false);
  }

  // close drop down - out side click
  useEffect(() => {
    function handleClickOutSide(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [isDropDownOpen]);

  return (
    <div
      className={`${width} ${height} cursor-pointer border-[#e6e6e6] border-[1px] rounded-[5px] flex relative`}
    >
      {/* Current option */}
      <div
        className="w-full flex items-center justify-between absolute top-0 bottom-0 pl-[10px] pr-[6px]"
        onClick={() => setIsDropDownOpen((prev) => !prev)}
      >
        <span className="text-sm text-[#202020] font-normal text-left">
          {currentOption[0].toUpperCase() + currentOption.slice(1)}
        </span>
        <ChevronDownIcon className="size-4 text-[#666]" />
      </div>
      {/* Drop down */}
      {isDropDownOpen && (
        <div
          ref={dropDownRef}
          className="flex flex-col bg-white absolute top-7 max-h-[280px] overflow-auto p-[6px] border-[#eee] border-[1px] shadow-[0px_4px_10px_0px_#0000001a,0px_8px_18px_4px_#0000000d)] w-full rounded-[10px] overflow-x-hidden z-40"
        >
          {sortOptions.map((option, index) =>
            currentOption === option ? (
              <div
                key={index}
                className="flex gap-2 items-center px-[6px] py-1 hover:bg-[#eee] hover:rounded-[5px]"
                onClick={() => setIsDropDownOpen(false)}
              >
                <Check size={16} color="#202020" weight="bold" />
                <span className="text-sm text-[#202020] font-normal">
                  {option[0].toUpperCase() + option.slice(1)}
                </span>
              </div>
            ) : (
              <div
                key={index}
                className="flex gap-2 items-center px-[6px] py-1 hover:bg-[#eee] hover:rounded-[5px]"
                onClick={() => handleSelectOption(option)}
              >
                <div className="size-4"></div>
                <span
                  key={index}
                  className="text-sm text-[#202020] font-normal"
                >
                  {option[0].toUpperCase() + option.slice(1)}
                </span>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDropList;
