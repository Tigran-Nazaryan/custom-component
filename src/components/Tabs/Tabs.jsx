import { useState } from "react";

const Tabs = ({ items = [], defaultActiveKey = 0 }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  return (
    <div>
      <div style={{ display: "flex", gap: 8 }}>
        {items.map((item, index) => (
          <button
            key={item.key || index}
            onClick={() => setActiveKey(index)}
            style={{
              backgroundColor: index === activeKey ? "blue" : "lightgray",
              color: index === activeKey ? "white" : "black",
              padding: "8px 16px",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>{items[activeKey]?.children}</div>
    </div>
  );
};

export default Tabs;
