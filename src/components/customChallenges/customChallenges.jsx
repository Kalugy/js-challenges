import React, { useState } from "react";
import challenges from "../../constants/challenge.json";
import ChallengeModal from "./ChallengeModal";
import ChallengeList from "./challengeList";
import { useTheme } from "../../context/ThemeContext";

const CrudComponent = () => {
  const { theme } = useTheme()
  const [data, setData] = useState(challenges);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    id: "",
    type: "",
    dificult: "",
    method: "",
    function: "",
    instruction: "",
    expectedResult: "",
    template: "",
    hint: "",
    points: ""
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    resetForm();
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setData(data.map((item) => (item.id === form.id ? form : item)));
    } else {
      setData([...data, { ...form, id: Date.now() }]);
    }
    closeModal();
  };

  const handleEdit = (item) => {
    setForm(item);
    setIsEditing(true);
    openModal();
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const resetForm = () => {
    setForm({
      id: "",
      type: "",
      dificult: "",
      method: "",
      function: "",
      instruction: "",
      expectedResult: "",
      template: "",
      hint: "",
      points: ""
    });
    setIsEditing(false);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Challenge Manager</h1>
      {/* <button
        className="px-4 py-2 rounded mb-4"
        style={{
          backgroundColor: theme.btnColor,
        }}
        onClick={openModal}
      >
        Add New Challenge
      </button> */}
      <ChallengeList
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <ChallengeModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        form={form}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isEditing={isEditing}
      />
    </div>
  );
};

export default CrudComponent;
