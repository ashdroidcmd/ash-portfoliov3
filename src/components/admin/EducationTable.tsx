import React, { useState } from "react";
import { useEducationApi } from "../../hooks/useEducation";

const EducationTable = () => {
  const { data: educationData, loading, error, deleteEducation } = useEducationApi();
  const [deleteLoadingId, setDeleteLoadingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this entry?")) return;

    setDeleteLoadingId(id);
    try {
      await deleteEducation(id);
    } catch {
      alert("Failed to delete education entry");
    } finally {
      setDeleteLoadingId(null);
    }
  };

  if (loading) return <p className="text-gray-300">Loading...</p>;
  if (error) return <p className="text-red-500">Failed to load education data.</p>;

  return (
    <div className="overflow-x-auto border-b border-b-gray-500 mb-4">
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Course Name</th>
            <th>School</th>
            <th>Certificate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img
                  src={item.image}
                  alt={item.school}
                  className="h-16 w-16 rounded-full object-contain border bg-white"
                />
              </td>
              <td className="font-semibold">{item.courseName}</td>
              <td>{item.school}</td>
              <td>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline hover:bg-white hover:text-black"
                >
                  View Certificate
                </a>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-error btn-outline hover:bg-red-600 hover:text-white"
                  onClick={() => handleDelete(item.id)}
                  disabled={deleteLoadingId === item.id}
                >
                  {deleteLoadingId === item.id ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EducationTable;
