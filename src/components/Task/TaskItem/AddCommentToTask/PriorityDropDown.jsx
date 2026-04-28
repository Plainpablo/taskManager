import { FlagIcon } from "@heroicons/react/24/outline";
import { FlagIcon as FlagIconSolid } from "@heroicons/react/24/solid";
import { Check, HandPalm } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { usePriority } from "../../../../context/PriorityContext";
export const PriorityDropDown = () => {
  const {
    selectedPriority,
    setSelectedPriority,
    isPriorityDropOpen,
    setIsPriorityDropOpen,
  } = usePriority();
  const priorityDropRef = useRef(null);
  const priorityList = [
    { icon: FlagIconSolid, title: "Priority 1", color: "#d1453b" },
    { icon: FlagIconSolid, title: "Priority 2", color: "#eb8909" },
    { icon: FlagIconSolid, title: "Priority 3", color: "#246fe0" },
    { icon: FlagIcon, title: "Priority 4", color: "#666" },
  ];

  //   Close drop down on outside click
  useEffect(() => {
    function HandleOutSideClick(event) {
      if (
        priorityDropRef.current &&
        !priorityDropRef.current.contains(event.target)
      ) {
        setIsPriorityDropOpen(false);
      }
    }
    if (isPriorityDropOpen) {
      document.addEventListener("click", HandleOutSideClick);
    }
    return () => {
      document.removeEventListener("click", HandleOutSideClick);
    };
  }, [isPriorityDropOpen]);

  return (
    <>
      {isPriorityDropOpen && (
        <div
          ref={priorityDropRef}
          className="shadow-[0_2px_4px_rgba(0,0,0,0.08)] absolute bg-white z-50 border-[#0000001a] border-[1px] rounded-[10px] top-[28px]"
        >
          <ul>
            {priorityList.map((priority, index) => (
              <li
                onClick={() => setSelectedPriority(index)}
                key={index}
                className="flex items-center px-2 py-1 hover:bg-[#eee] cursor-pointer"
              >
                <priority.icon
                  className={`size-4 mr-[8px] text-[${priority.color}] `}
                />
                <span className="text-[#666] mx-[10px]">{priority.title}</span>

                {index === selectedPriority && (
                  <Check color="#d33322" size={14} weight="bold" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
