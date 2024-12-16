import React from "react";

const ChallengeModal = ({ isOpen, closeModal, form, handleInputChange, handleSubmit, isEditing }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-lg font-semibold mb-4">
          {isEditing ? "Edit Challenge" : "Add New Challenge"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="type"
              placeholder="Type"
              value={form.type}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="dificult"
              placeholder="Difficulty"
              value={form.dificult}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="method"
              placeholder="Method"
              value={form.method}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="function"
              placeholder="Function"
              value={form.function}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <textarea
              name="instruction"
              placeholder="Instruction"
              value={form.instruction}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <textarea
              name="hint"
              placeholder="Hint"
              value={form.hint}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="expectedResult"
              placeholder="Expected Result"
              value={form.expectedResult}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <textarea
              name="template"
              placeholder="Template"
              value={form.template}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="points"
              placeholder="Points"
              value={form.points}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {isEditing ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChallengeModal;
