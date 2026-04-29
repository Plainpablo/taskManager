import { XMarkIcon } from "@heroicons/react/24/outline";
import { useLabels } from "../../../../context/LabelsContext";

export const CommentLabel = () => {
  const { setLabels, labels } = useLabels();

  return (
    <>
      {labels.map((label, index) => (
        <div
          key={index}
          className="flex items-center pl-2 bg-[#00000033] rounded-[5px] gap-1 h-7 mr-1 mb-1 pr-1 hover:bg-[#00000080] cursor-pointer"
        >
          <span className="text-[#202020] text-sm">{label}</span>
          <div
            onClick={() => setLabels(labels.filter(labl => label !== labl))}
            className="size-5 rounded-[3px] flex items-center justify-center hover:bg-[#000c]"
          >
            <XMarkIcon className="size-3 text-[#666]" />
          </div>
        </div>
      ))}
    </>
  );
};
