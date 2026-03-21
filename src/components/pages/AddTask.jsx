const AddTask = () => {
  return (
    <div className="p-8 w-full h-screen flex justify-center">
      <div className="w-full max-w-[550px] h-36 bg-white mt-[calc(13vh-32px)] shadow-[0_15px_50px_rgba(0,0,0,0.35)] rounded-[10px]">
        <div className="p-3 flex flex-col border border-b-[1px] border-[#e6e6e6]">
          <input type="text" name="" id="" placeholder="Title of the task" />
          <input type="text" name="" id="" placeholder="Description" />
          <div className="flex gap-2">
            <button>Today</button>
            <button>Attachment</button>
            <button>Priority</button>
          </div>
        </div>
        <div className="m-4 flex gap-2 justify-end">
          <button className="bg-[#0000000a] px-3 py-1 rounded-[5px]">
            <span>Cancel</span>
          </button>
          <button className="px-3 py-1 rounded-[5px] bg-[#eda59e] text-white cursor-not-allowed">
            <span>Add Task</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
