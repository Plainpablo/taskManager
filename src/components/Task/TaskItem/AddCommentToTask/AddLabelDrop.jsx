import { Tag } from "phosphor-react";

export const AddLabelDrop = () => {
  return (
    <div className="border-[#0000001a] border-[1px] rounded-[10px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.08)] absolute z-50 top-[28px] w-[300px]">
      <div className="p-2 w-full border-b-[1px] border-b-[#f5f5f5]">
        <input
          type="text"
          className="py-2 px-[6px] w-full outline-none border-[#e6e6e6] border-[1px] rounded-[5px] h-8"
          placeholder="Type a label"
        />
      </div>
      <ul>
        <li className="py-1 px-2 flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Tag color="#808080"/>
            <span className="text-[#202020] text-sm">KK</span>
          </div>
          <div className="size-4 border-[1px] border-[#808080] rounded-[5px]">

          </div>
        </li>
      </ul>
    </div>
  );
};
