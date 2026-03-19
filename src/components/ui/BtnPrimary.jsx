const BtnPrimary = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-white py-3 px-6 rounded-xl text-xs font-semibold ${className}`}
    >
      {text}
    </button>
  );
};

export default BtnPrimary;
