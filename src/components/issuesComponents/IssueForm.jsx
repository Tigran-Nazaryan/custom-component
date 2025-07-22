import { useState, useEffect } from "react";

const IssueForm = ({ labels, onCreate, onCancel, onSave, initialData }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        selectedLabels: []
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title,
                description: initialData.description,
                selectedLabels: initialData.labels || []
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const toggleLabel = (label) => {
        setFormData(prev => {
            const labels = prev.selectedLabels.find(sl => sl.name === label.name)
                ? prev.selectedLabels.filter(l => l.name !== label.name)
                : [...prev.selectedLabels, label];
            return { ...prev, selectedLabels: labels };
        });
    };

    const handleSubmit = () => {
        if (!formData.title.trim()) return;

        const issueData = {
            ...initialData,
            title: formData.title,
            description: formData.description,
            labels: formData.selectedLabels,
        };

        if (initialData) {
            onSave(issueData);
        } else {
            onCreate(issueData);
        }

        setFormData({ title: "", description: "", selectedLabels: [] });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-10">
            <div className="bg-white p-6 rounded-md shadow-lg w-[400px] relative max-w-full">
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="w-full mb-4 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full mb-4 border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows={4}
                />
                <div className="mb-4 flex flex-wrap gap-2">
                    {labels.map((label) => (
                        <span
                            key={label.name}
                            onClick={() => toggleLabel(label)}
                            className={`text-white px-3 py-1 rounded cursor-pointer select-none border-2 ${
                                formData.selectedLabels.find(sl => sl.name === label.name)
                                    ? "border-black"
                                    : "border-transparent"
                            }`}
                            style={{ backgroundColor: label.color }}
                        >
                            {label.name}
                        </span>
                    ))}
                </div>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={handleSubmit}
                        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition cursor-pointer"
                    >
                        {initialData ? "Save" : "Create"}
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition cursor-pointer"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IssueForm;
