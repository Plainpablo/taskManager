import { List, Calendar } from "phosphor-react";
import { useState } from "react";

export const DisplayLayout = () => {
  const [isLayoutOption, setIsLayoutOption] = useState(0);

  const layoutOptions = [
    { title: "List", icon: List, iconStyle: ""},
    { title: "Board", icon: List, iconStyle: "rotate-90"  },
    { title: "Calender", icon: Calendar, iconStyle: "" },
  ];
  return (
    <div className="p-1 bg-[#f5f5f5] rounded-[10px] grid grid-cols-3 m-[6px]">
      {layoutOptions.map((option, index) =>
        isLayoutOption === index ? (
          <label
          key={index}
            className="px-1 pt-1 pb-2 flex flex-col justify-center items-center bg-white rounded-[8px] border-[#eee] border-[1px]"
            onClick={() => setIsLayoutOption(index)}
          >
            <div className="size-6 flex justify-center items-center">
              <option.icon size={16} color="#202020" className={option.iconStyle}/>
            </div>
            <span className="text-[#202020] font-normal text-xs">
              {option.title}
            </span>
          </label>
        ) : (
          <label
          key={index}
            className="px-1 pt-1 pb-2 flex flex-col justify-center items-center bg-transparent"
            onClick={() => setIsLayoutOption(index)}
          >
            <div className="size-6 flex justify-center items-center">
              <option.icon size={16} color="#666" className={option.iconStyle} />
            </div>
            <span className="text-[#666] font-normal text-xs">
              {option.title}
            </span>
          </label>
        ),
      )}
    </div>
  );
};
