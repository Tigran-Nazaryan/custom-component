import {useState} from "react";

const Tabs = ({children}) => {
    const [activeTab, setActiveTab] = useState(0);

    // TODO: we don't need this loop
    const labels = children.map((child) => child.props.label);

    return (
        <div className="mt-4">
            <div className="flex gap-2 mb-4">
                {labels.map((label, index) => (
                    <button
                        key={label}
                        onClick={() => setActiveTab(index)}
                        className={`px-4 py-2 rounded font-semibold transition 
                        ${index === activeTab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="p-4 border rounded bg-gray-50">
                {children[activeTab]}
            </div>
        </div>
    );
};

export default Tabs;
