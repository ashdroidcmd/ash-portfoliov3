/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useExperienceApi } from "../../hooks/useExperience";

const ExperienceTable = () => {
  const {
    data: experienceData,
    loading,
    error,
    deleteExperience,
    updateExperience,
  } = useExperienceApi();

  const [deleteLoadingId, setDeleteLoadingId] = useState<number | null>(null);
  const [editItem, setEditItem] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [form, setForm] = useState({
    companyName: "",
    jobTitle: "",
    date: "",
    image: "",
  });

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this experience?"))
      return;

    setDeleteLoadingId(id);
    try {
      await deleteExperience(id);
    } catch {
      alert("Failed to delete experience entry");
    } finally {
      setDeleteLoadingId(null);
    }
  };

  const handleEdit = (item: any) => {
    setEditItem(item);
    setForm({
      companyName: item.companyName,
      jobTitle: item.jobTitle,
      date: item.date,
      image: item.image,
    });
    setIsModalOpen(true);
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;

    setEditLoading(true);
    try {
      await updateExperience(editItem.id, form);
      setIsModalOpen(false);
    } catch (error) {
      alert("Update failed");
    } finally {
      setEditLoading(false);
    }
  };

  if (loading) return <p className="text-gray-300">Loading...</p>;
  if (error)
    return <p className="text-red-500">Failed to load experience data.</p>;

  return (
    <>
      <div className="mb-4 overflow-x-auto border-b border-b-gray-500">
        <table className="table-zebra table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Company</th>
              <th>Job Title</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {experienceData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.companyName}
                    className="h-16 w-16 rounded-full border bg-white object-contain"
                  />
                </td>
                <td className="font-semibold">{item.companyName}</td>
                <td>{item.jobTitle}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    className="btn btn-sm btn-error btn-outline hover:bg-red-600 hover:text-white"
                    onClick={() => handleDelete(item.id)}
                    disabled={deleteLoadingId === item.id}
                  >
                    {deleteLoadingId === item.id ? "Deleting..." : "Delete"}
                  </button>
                  <button
                    className="btn btn-sm btn-info btn-outline ml-2 hover:bg-blue-600 hover:text-white"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <form
            onSubmit={handleUpdateSubmit}
            className="w-full max-w-lg space-y-4 rounded-lg border border-gray-500 bg-black p-6"
          >
            <h2 className="mb-2 text-xl font-bold text-white">
              Edit Experience
            </h2>
            <input
              type="text"
              placeholder="Company Name"
              className="input input-bordered w-full"
              value={form.companyName}
              onChange={(e) =>
                setForm({ ...form, companyName: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Job Title"
              className="input input-bordered w-full"
              value={form.jobTitle}
              onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Date"
              className="input input-bordered w-full"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
            <input
              type="url"
              placeholder="Image URL"
              className="input input-bordered w-full"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              required
            />

            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                className="btn btn-error btn-outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`btn btn-info btn-outline ${editLoading ? "loading" : ""}`}
                disabled={editLoading}
              >
                {editLoading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ExperienceTable;
