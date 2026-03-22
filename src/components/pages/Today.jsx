import { PlusIcon } from "@heroicons/react/24/outline";
import bgImage from "../../assets/images/vacation-vector.png";
import { useState } from "react";

const Today = () => {
  const [isHover, setIsHover] = useState(false);

  function handleAddTaskHover(value) {
    value === "MouseEnter"
      ? setIsHover(true)
      : value === "MouseLeave"
        ? setIsHover(false)
        : "";
  }
  return (
    <div className="flex flex-col">
      <div className="flex mx-14 mb-3">
        <h1 className="text-2xl font-bold">Today</h1>
      </div>
      <div className="px-14">
        <button
          className={`flex items-center ${isHover ? "text-[#d33322]" : ""}`}
          onMouseEnter={() => handleAddTaskHover("MouseEnter")}
          onMouseLeave={() => handleAddTaskHover("MouseLeave")}
        >
          <PlusIcon className={`size-[13px] mr-3 ${isHover? "text-white bg-[#d33322]  rounded-[50%]" : "text-[#d33322]"}`} />
          Add task
        </button>
      </div>

      <div className="flex flex-col justify-center items-center max-w-[360px] mx-auto">
        <img
          src={bgImage}
          alt="vacation vector image"
          className="max-w-[294px]"
        />
        <div>
          <p className="text-[#202020] font-semibold my-[6px]">
            Have a marvelous day off, Plain!
          </p>
          <p className="text-[#666] text-sm px-6 mx-6">
            Schedule days off in the Productivity tab of your Settings menu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Today;
