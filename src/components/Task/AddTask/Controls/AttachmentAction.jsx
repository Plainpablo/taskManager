import { PaperClipIcon } from "@heroicons/react/24/outline";
import React from "react";

const AttachmentAction = () => {
  return (
    <div className="flex justify-center items-center px-[6px] py-1 border-[#e6e6e6] border-[1px] rounded-[5px]">
      <PaperClipIcon className="size-4 text-[#666]" />
      <span className="ml-1 pr-1 text-[#666]">Attachment</span>
    </div>
  );
};

export default AttachmentAction;
