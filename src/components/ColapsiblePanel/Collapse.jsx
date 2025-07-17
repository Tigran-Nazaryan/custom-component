import { useState } from "react";
import Panel from "./Panel";

const Collapse = ({ size, items, defaultActiveKeys = [] }) => {
  const [activeKeys, setActiveKeys] = useState(defaultActiveKeys);

  const toggleKey = (key) => {
    setActiveKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <div>
      {items.map((item) => (
        <Panel
          size={size}
          key={item.key}
          label={item.label}
          isActive={activeKeys.includes(item.key)}
          onClick={() => toggleKey(item.key)}
        >
          {item.children}
        </Panel>
      ))}
    </div>
  );
};

export default Collapse;
