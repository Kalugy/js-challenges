import React from "react";
import { useTheme } from "../../context/ThemeContext";

const ChallengeList = ({ data, handleEdit, handleDelete }) => {
  const { theme } = useTheme();
  return (
    <div className="shadow rounded p-4 ">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Challenges</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className=" ">
              <th className="border p-2 text-left">ID</th>
              <th className="border p-2 text-left">Type</th>
              <th className="border p-2 text-left">Difficulty</th>
              <th className="border p-2 text-left">Method</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-400 ">
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.type}</td>
                <td className="border p-2">{item.dificult}</td>
                <td className="border p-2">{item.method} - {item.function}</td>
                <td className="border p-2">
                  <div className="flex flex-wrap gap-2">
                    {/* <button
                      className="px-2 py-1 rounded "
                      style={{
                        backgroundColor: theme.btnAlertColor,
                      }}
                      onClick={() => handleEdit(item)}
                      disabled
                    >
                      Edit
                    </button>
                    <button
                      className="px-2 py-1 rounded "
                      style={{
                        backgroundColor: theme.btnDangerColor,
                      }}
                      onClick={() => handleDelete(item.id)}
                      disabled
                    >
                      Delete
                    </button> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChallengeList;
