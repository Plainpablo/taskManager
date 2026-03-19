import React from "react";
import BtnPrimary from "./BtnPrimary";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

const HelpCenter = () => {
  return (
    <div className="helpCenter bg-[#141522] p-4 rounded-xl flex flex-col items-center relative mw-[248px]">
      <div className="helpIcon absolute top-[-17px] bg-white p-[.2px] rounded-full w-[48px] h-[48px] flex items-center justify-center drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
        <QuestionMarkCircleIcon className="size-14"/>
      </div>
      <div className="flex flex-col gap-3  pt-[71px] pb-[48px]">
        <h1 className="text-[#FFFFFF] font-semibold text-base">Help Center</h1>
        <p className="text-[#FFFFFF] text-xs">
          Having Trouble in Learning.
          Please contact us for more questions.
        </p>
      </div>
      <BtnPrimary text="Go To Help Center" />
    </div>
  );
};

export default HelpCenter;
