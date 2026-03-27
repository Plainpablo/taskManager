const SearchControlBtn = ({
  Icon,
  title,
  shortcutLeft,
  shortcutRight,
  thenText,
}) => {

  return (
    <div className=" px-3 h-[42px] flex items-center justify-between">
      <div className="flex items-center">
        <div className="size-6 w-6 h-6 flex items-center">
          <Icon className="size-4 w-4 h-4 " />
        </div>
        <p className="text-[13px]">{title}</p>
      </div>

      <div>
        <kbd className="px-[5px] mx-[1px] bg-[#00000012] rounded-[3px] text-[#444] font-normal ">
          {shortcutLeft}
        </kbd>
        <kbd className="px-[5px] mx-[1px] text-[#444]  font-normal ">
          {thenText ? "then" : ""}
        </kbd>
        <kbd className="px-[5px] mx-[1px] bg-[#00000012] rounded-[3px] text-[#444] font-normal ">
          {shortcutRight}
        </kbd>
      </div>
    </div>
  );
};


export default SearchControlBtn;