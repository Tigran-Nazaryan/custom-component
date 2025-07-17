const Panel = ({ size, label, children, isActive, onClick }) => {
  const sizeClass =
    size === "large" ? "text-xl" : size === "small" ? "text-sm" : "text-base";
  return (
    <div className={`border mb-2 rounded  ${sizeClass}`}>
      <div className="p-3 bg-gray-200 cursor-pointer" onClick={onClick}>
        <span className="mr-2">{isActive ? "v" : ">"}</span>
        {label}
      </div>
      {isActive && <div className="p-3 border-t bg-white">{children}</div>}
    </div>
  );
};

export default Panel;
