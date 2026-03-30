import { EllipsisHorizontalIcon, EllipsisVerticalIcon, PencilIcon } from "@heroicons/react/24/outline";

function TaskItem({taskTitle, description}) {
  return (
    <li className="flex flex-col ">
      <div className="flex justify-between items-center  py-2">
        <div className="flex">
          <div className="flex">
            <button>
              <EllipsisVerticalIcon className="w-[18px]" />
            </button>
          </div>
          <div className="flex justify-center gap-2">
            <input type="radio" />
            <span>{taskTitle}</span>
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          <button>
            <PencilIcon className="size-[18px]" />
          </button>
          <button>
            <EllipsisHorizontalIcon className="size-[18px]" />
          </button>
        </div>
      </div>
      <div className="flex">
        <span className="w-[39px]"></span>
        <span>{description}</span>
      </div>
    </li>
  );
}

export default TaskItem;
