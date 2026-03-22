import { FlagIcon } from "@heroicons/react/24/outline";

const Priority = () => {
  return (
    <div className="flex justify-center items-center px-[6px] py-1 border-[#e6e6e6] border-[1px] rounded-[5px]">
      <FlagIcon className="size-4 text-[#666]" />
      <span className="ml-1 pr-1 text-[#666]">Priority</span>
    </div>
  );
};

export default Priority;
