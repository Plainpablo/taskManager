import { PencilIcon } from "@heroicons/react/24/outline";

export const TaskItemOptionsMenu = () => {
  return (
    <div className="bg-white shadow-[0_15px_50px_rgba(0,0,0,0.35)]">
      <div>
        <div className="flex items-center justify-between px-[6px] mx-[6px] min-h-8">
          <div className="flex items-center gap-[10px]">
            <PencilIcon className="size-6 text-[#666]" />
            <span className="text-[#202020]">Edit</span>
          </div>
          <kbd className="px-[5px] mx-[1px] text-[#666] font-normal ">
            Ctrl E
          </kbd>
        </div>
        <div className="flex items-center justify-between px-[6px] mx-[6px] min-h-8">
          <div className="flex items-center gap-[10px]">
            <PencilIcon className="size-6 text-[#666]" />
            <span className="text-[#202020]">Edit</span>
          </div>
          <kbd className="px-[5px] mx-[1px] text-[#666] font-normal ">
            Ctrl E
          </kbd>
        </div>
      </div>
    </div>
  );
};
