import { useState } from "react";

const defaultLabel = { name: "", color: "#000000" };

export default function LabelManager({ labels, setLabels }) {
  const [newLabel, setNewLabel] = useState(defaultLabel);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewLabel((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const addLabel = (e) => {
    e.preventDefault();

    const trimmedName = newLabel.name.trim();

    if (!trimmedName) {
      setErrors({ name: "Label name is required" });
      return;
    }

    const duplicate = labels.some(
      (label) => label.name.toLowerCase() === trimmedName.toLowerCase(),
    );
    if (duplicate) {
      setErrors({ name: "Label name must be unique" });
      return;
    }

    setLabels((prev) => [
      ...prev,
      { ...newLabel, name: trimmedName, id: Date.now() },
    ]);
    closeModal();
  };

  const closeModal = () => {
    setNewLabel(defaultLabel);
    setErrors({});
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white rounded hover:bg-blue-700 w-[100px] cursor-pointer"
      >
        New Label
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(255,255,255,0.5)] flex justify-center items-center z-1">
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4">Add or Choose Label</h2>

            <form onSubmit={addLabel} className="mb-4 space-y-3">
              <input
                name="name"
                value={newLabel.name}
                onChange={handleInput}
                placeholder="Label name"
                className={`w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
              )}

              <input
                name="color"
                type="color"
                value={newLabel.color}
                onChange={handleInput}
                className="w-full h-10 p-0 border rounded focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Add Label
              </button>
            </form>

            <button
              onClick={closeModal}
              className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 mb-4"
            >
              Cancel
            </button>

            <hr className="my-4" />

            <h3 className="text-lg font-medium mb-2">Existing Labels</h3>
            <ul className="max-h-40 overflow-y-auto space-y-2">
              {labels.map((label) => (
                <li
                  key={label.id}
                  className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
                >
                  <span
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: label.color }}
                  />
                  <span>{label.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
