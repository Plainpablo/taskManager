import {
    CheckIcon,
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

function TaskItem({ taskTitle, description }) {
  return (
    <li className="flex flex-col ">
      <div className="flex justify-between items-center  py-2">
        <div className="flex">
          <div className="flex">
            <button>
              <EllipsisVerticalIcon className="w-[18px]" />
            </button>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <span className="border-[1px] rounded-full border-[#999] w-[18px] h-[18px] flex justify-center items-center">
                <CheckIcon className="text-[#999] w-3 " />
            </span>
            <span className="text-[#202020]">{taskTitle}</span>
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          <button>
            <PencilIcon className="size-[18px] text-[#666]" />
          </button>
          <button>
            <EllipsisHorizontalIcon className="size-[18px] text-[#666]" />
          </button>
        </div>
      </div>
      <div className="flex">
        <span className="w-[39px]"></span>
        <span className="text-[#666]">{description}</span>
      </div>
    </li>
  );
}

export default TaskItem;
