const IssueLabel = ({ label, isSelected, onClick }) => {
    return (
        <span
            onClick={() => onClick(label)}
            className={`text-white px-3 py-1 rounded cursor-pointer select-none border-2 ${
                isSelected ? "border-black" : "border-transparent"
            }`}
            style={{ backgroundColor: label.color }}
        >
      {label.name}
    </span>
    );
};

export default IssueLabel;