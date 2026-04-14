import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import CustomDropList from "../../../UI/CustomDropList";

export const LayoutSettings = () => {
  const sortOptions = [
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
  ];
  return (
    <div className="absolute top-8 right-0 bg-white w-max z-30 rounded-[10px] py-[6px]">
      <div className="w-[300px] flex flex-col gap-[6px]">
        <div className="flex justify-between items-center py-[2px] px-[12px]">
          <span className="text-[#202020] font-semibold text-sm">Layout</span>
          <QuestionMarkCircleIcon className="size-4" />
        </div>

        <div className="border-b-[#eee] border-b-[1px]"></div>

        <div>
          {/* Sort */}
          <div className="px-[6px]">
            <div className="flex justify-between items-center py-[2px] px-[6px]">
              <span className="text-[#202020] font-semibold text-sm">Sort</span>
              <div className="w-7 h-7 flex justify-center items-center bg-[#0000000a] rounded-[5px]">
                <ChevronDownIcon className="size-4" />
              </div>
            </div>

            <div className="flex justify-between items-center py-[2px] px-[6px]">
              <span className="text-[#202020] font-normal text-sm">
                Grouping
              </span>
              <CustomDropList
                sortOptions={sortOptions}
                width="w-[160px]"
                height="h-[28px]"
              />
            </div>

            <div className="flex justify-between items-center py-[2px] px-[6px] relative">
              <span className="text-[#202020] font-normal text-sm">
                Sorting
              </span>
              <CustomDropList
                sortOptions={sortOptions}
                width="w-[160px]"
                height="h-[28px]"
              />
            </div>
          </div>

          {/* Filter */}
          <div className="px-[6px]">
            <div className="flex justify-between items-center py-[2px] px-[6px]">
              <span className="text-[#202020] font-semibold text-sm">
                Filter
              </span>
              <div className="w-7 h-7 flex justify-center items-center bg-[#0000000a] rounded-[3px]">
                <ChevronDownIcon className="size-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
