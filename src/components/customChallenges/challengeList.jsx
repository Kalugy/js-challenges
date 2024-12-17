import React from "react";
import { useTheme } from "../../context/ThemeContext";

const ChallengeList = ({ data, handleEdit, handleDelete }) => {
  const { theme } = useTheme()
  return (
    <div className=" shadow rounded p-4">
      <h2 className="text-lg font-semibold mb-4">Challenges</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Difficulty</th>
            <th className="border p-2">Method</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.id}</td>
              <td className="border p-2">{item.type}</td>
              <td className="border p-2">{item.dificult}</td>
              <td className="border p-2">{item.method} - {item.function}</td>
              <td className="border p-2">
                {/* <button
                  className="  px-2 py-1 rounded mr-2"
                  style={{
                    backgroundColor: theme.btnAlertColor,
                  }}
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="  px-2 py-1 rounded"
                  style={{
                    backgroundColor: theme.btnDangerColor,
                  }}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChallengeList;
