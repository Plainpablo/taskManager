import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import CustomDropList from "../../../UI/CustomDropList";
import { useEffect, useState } from "react";
import { DisplayLayout } from "../DisplayLayout";
import { useDisplayModal } from "../../../../context/DisplayModalContext";

export const DisplaySettingsModal = ({ isDisplay, setIsDisplay }) => {
  const [isSortOptionsVisible, setIsSortOptionVisible] = useState(true);
  const [isFilterOptionsVisible, setIsFilterOptionVisible] = useState(true);
  const [isResetOptions, setIsResetOptions] = useState(false);
  const { isLayoutOption, setIsLayoutOption } = useDisplayModal();
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

  function handleResetOptions() {
    setIsLayoutOption(0);
  }

  return (
    <div 
    onClick={(e) => e.stopPropagation()}
    className="absolute top-8 right-0 bg-white w-max z-50 rounded-[10px] py-[6px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1),0px_8px_18px_4px_rgba(0,0,0,0.05)]">
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
                  className={`cursor-pointer size-4 text-[#666] ${!isSortOptionsVisible ? "-rotate-90" : "rotate-0"}`}
                  onClick={() => setIsSortOptionVisible((prev) => !prev)}
                />
              </div>
            </div>

            {/* Render Sort Options */}
            {isSortOptionsVisible &&
              sortOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-[2px] px-[6px]"
                >
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
                  className={`cursor-pointer size-4 text-[#666] ${!isFilterOptionsVisible ? "-rotate-90" : "rotate-0"}`}
                  onClick={() => setIsFilterOptionVisible((prev) => !prev)}
                />
              </div>
            </div>

            {/* Render Filter Options */}
            {isFilterOptionsVisible &&
              filterOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-[2px] px-[6px]"
                >
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
      {/* Reset to default */}
      {isLayoutOption !== 0 && (
        <div
          onClick={handleResetOptions}
          className="border-b-[#eee] border-t-[1px] mt-[6px] pt-[6px]"
        >
          <span className="text-[#dc4c3e] text-sm font-semibold">
            Reset all
          </span>
        </div>
      )}
    </div>
  );
};
