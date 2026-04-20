import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import CustomDropList from "../../../UI/CustomDropList";
import { useState } from "react";
import { DisplayLayout } from "../DisplayLayout";

export const DisplaySettingsModal = () => {
  const [isSortOptionsVisible, setIsSortOptionVisible] = useState(true);
  const [isFilterOptionsVisible, setIsFilterOptionVisible] = useState(true);

  const sortOptions = [
    {
      title: "Grouping",
      options: [
        "smart",
        "Manual",
        "Name",
        "Assignee",
        "Date",
        "Date added",
        "Deadline",
        "Priority",
        "Project",
        "Workspace",
      ],
      width: "w-[160px]",
      height: "h-[28px]",
    },
    {
      title: "Sorting",
      options: [
        "smart",
        "Manual",
        "Name",
        "Assignee",
        "Date",
        "Date added",
        "Deadline",
        "Priority",
        "Project",
        "Workspace",
      ],
      width: "w-[160px]",
      height: "h-[28px]",
    },
  ];
  const filterOptions = [
    {
      title: "Assignee",
      options: [
        "smart",
        "Manual",
        "Name",
        "Assignee",
        "Date",
        "Date added",
        "Deadline",
        "Priority",
        "Project",
        "Workspace",
      ],
      width: "w-[160px]",
      height: "h-[28px]",
    },
    {
      title: "Priority",
      options: [
        "smart",
        "Manual",
        "Name",
        "Assignee",
        "Date",
        "Date added",
        "Deadline",
        "Priority",
        "Project",
        "Workspace",
      ],
      width: "w-[160px]",
      height: "h-[28px]",
    },
  ];
  return (
    <div className="absolute top-8 right-0 bg-white w-max z-30 rounded-[10px] py-[6px]">
      <div className="w-[300px] flex flex-col gap-[6px]">
        <div className="flex justify-between items-center py-[2px] px-[12px]">
          <span className="text-[#202020] font-semibold text-sm">Layout</span>
          <QuestionMarkCircleIcon className="size-4" />
        </div>

        <div className="border-b-[#eee] border-b-[1px]">
          <DisplayLayout />
          
        </div>

        <div>
          {/* Sort */}
          <div className="px-[6px]">
            <div className="flex justify-between items-center py-[2px] px-[6px]">
              <span className="text-[#202020] font-semibold text-sm">Sort</span>
              <div className="w-7 h-7 flex justify-center items-center">
                <ChevronDownIcon 
                className={`size-4 text-[#666] ${!isSortOptionsVisible ? "-rotate-90" : "rotate-0"}`} 
                onClick={() => setIsSortOptionVisible(prev => !prev)}
                />
              </div>
            </div>

            {/* Render Sort Options */}
            {isSortOptionsVisible && sortOptions.map((option, index) => (
              <div className="flex justify-between items-center py-[2px] px-[6px]">
                <span className="text-[#202020] font-normal text-sm">
                  {option.title}
                </span>
                <CustomDropList
                  sortOptions={option.options}
                  width={option.width}
                  height={option.height}
                />
              </div>
            ))}
          </div>

          {/* Filter */}
          <div className="px-[6px]">
            <div className="flex justify-between items-center py-[2px] px-[6px]">
              <span className="text-[#202020] font-semibold text-sm">
                Filter
              </span>
              <div className="w-7 h-7 flex justify-center items-center">
                <ChevronDownIcon 
                className={`size-4 text-[#666] ${!isFilterOptionsVisible ? "-rotate-90" : "rotate-0"}`}
                  onClick={() => setIsFilterOptionVisible(prev => !prev)}
                 />
              </div>
            </div>

            {/* Render Filter Options */}
            {isFilterOptionsVisible && filterOptions.map((option, index) => (
              <div className="flex justify-between items-center py-[2px] px-[6px]">
                <span className="text-[#202020] font-normal text-sm">
                  {option.title}
                </span>
                <CustomDropList
                  sortOptions={option.options}
                  width={option.width}
                  height={option.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
