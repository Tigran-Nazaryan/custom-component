const Panel = ({size, label, children, isActive, onClick}) => {
    const sizeClass = size === "large" ? "text-xl" : size === "small" ? "text-sm" : "text-base";
    return (
        <div className={`border mb-2 rounded ${sizeClass}`}>
            <div
                className="p-3 bg-gray-200 cursor-pointer select-none"
                onClick={onClick}
            >
                <span className="mr-2">{isActive ? "v" : ">"}</span>
                {label}
            </div>

            <div
                className="transition-all duration-300 overflow-hidden"
                style={{
                    maxHeight: isActive ? "500px" : "0px",
                    padding: isActive ? "1rem" : "0 1rem",
                    borderTop: isActive ? "1px solid #ddd" : "none",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Panel;
