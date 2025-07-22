import { useState, useEffect } from "react";
import { z } from "zod";
import IssueLabel from "./label.jsx";

const IssueForm = ({ labels, onCreate, onCancel, onSave, initialData }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    selectedLabels: initialData?.labels || [],
  });
  const formSchema = z.object({
    title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        description: initialData.description,
        selectedLabels: initialData.labels || [],
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleLabel = (label) => {
    setFormData((prev) => {
      const labels = prev.selectedLabels.find((sl) => sl.name === label.name)
        ? prev.selectedLabels.filter((l) => l.name !== label.name)
        : [...prev.selectedLabels, label];
      return { ...prev, selectedLabels: labels };
    });
  };

  const handleSubmit = () => {
    try {
      formSchema.parse({ title: formData.title.trim() });

      setErrors({});

      const issueData = {
        ...initialData,
        title: formData.title.trim(),
        description: formData.description,
        labels: formData.selectedLabels,
      };

      if (initialData && onSave) {
        onSave(issueData);
      } else if (onCreate) {
        onCreate(issueData);
      }

      setFormData({ title: "", description: "", selectedLabels: [] });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = {};

        err.issues.forEach((e) => {
          fieldErrors[e.path[0]] = e.message;
        });

        setErrors(fieldErrors);
      } else {
        console.error(err);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(255,255,255,0.5)] z-10">
      <div
        className="bg-white p-6 rounded-md w-[400px] relative max-w-full"
        style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}
      >
        <h2 className="text-xl font-semibold mb-4">
          {initialData ? "Edit Issue" : "Create New Issue"}
        </h2>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className={`w-full mb-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.title && (
          <p className="text-red-600 text-sm mb-3">{errors.title}</p>
        )}
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full mb-4 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          rows={4}
        />
        <div className="mb-4 flex flex-wrap gap-2">
          {labels.map((label) => (
            <IssueLabel
              key={label.name}
              label={label}
              isSelected={formData.selectedLabels.some(
                (sl) => sl.name === label.name,
              )}
              onClick={toggleLabel}
            />
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
