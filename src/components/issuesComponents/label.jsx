const IssueLabel = ({
  label,
  isSelected = false,
  onClick,
  isClickable = false,
}) => {
  return (
    <span
      onClick={isClickable ? () => onClick(label) : undefined}
      className="text-white text-sm px-2 py-1 rounded transition-opacity"
      style={{
        backgroundColor: label.color,
        cursor: isClickable ? "pointer" : "default",
        opacity: isClickable ? (isSelected ? 1 : 0.5) : 1,
        transition: "opacity 0.3s ease",
      }}
    >
      {label.name}
    </span>
  );
};

export default IssueLabel;
