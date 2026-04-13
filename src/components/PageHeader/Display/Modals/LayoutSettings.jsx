import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export const LayoutSettings = () => {
  return (
    <div className="absolute top-8 right-0 bg-white w-max z-40">
      <div className="w-[300px] flex flex-col gap-[6px]">
        <div className="flex justify-between items-center py-[2px] px-1">
          <span>Layout</span>
          <QuestionMarkCircleIcon className="size-4" />
        </div>
        <div className="border-b-[#666] border-b-[1px]"></div>
        <div>
          {/* Sort */}
          <div>
            <div className="flex justify-between items-center py-[2px] px-[6px]">
              <span>Sort</span>
              <div className="w-7 h-7 flex justify-center items-center bg-[#0000000a] rounded-[5px]">
                <ChevronDownIcon className="size-4" />
              </div>
            </div>
            <div className="flex justify-between items-center py-[2px] px-[6px]">
              <span>Grouping</span>
              <div className="w-[160px] h-[28px] pr-[6px] ml-[10px] border-[#e6e6e6] border-[1px] rounded-[5px] flex">
                <select className="w-full" name="" id=""></select>
              </div>
            </div>
            <div className="flex justify-between items-center py-[2px] px-[6px]">
              <span>Sorting</span>
              <div className="w-[160px] h-[28px] pr-[6px] pl-[10px] border-[#e6e6e6] border-[1px] rounded-[5px] flex">
                <select className="w-full" name="" id=""></select>
              </div>
            </div>
          </div>

          {/* Filter */}
          <div>
            <div className="flex justify-between items-center py-[2px] px-[6px]">
              <span>Filter</span>
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
