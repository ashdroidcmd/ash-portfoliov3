/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useProjectApi } from "../../hooks/useProject";
import axios from "axios";

const ProjectTable = () => {
  const {
    data: projectData,
    loading,
    error,
    deleteProject,
    refetch,
  } = useProjectApi();

  const [deleteLoadingId, setDeleteLoadingId] = useState<number | null>(null);
  const [editItem, setEditItem] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    techStack: "",
    github: "",
    view: "",
  });

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    setDeleteLoadingId(id);
    try {
      await deleteProject(id);
    } catch {
      alert("Failed to delete project entry");
    } finally {
      setDeleteLoadingId(null);
    }
  };

  const handleEdit = (item: any) => {
    setEditItem(item);
    setForm({
      title: item.title,
      description: item.description,
      image: item.image,
      techStack: item.techStack.join(", "),
      github: item.github || "",
      view: item.view || "",
    });
    setIsModalOpen(true);
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;

    setEditLoading(true);
    try {
      await axios.put(`http://localhost:5000/projects/${editItem.id}`, {
        ...form,
        techStack: form.techStack.split(",").map((tech) => tech.trim()),
      });
      await refetch();
      setIsModalOpen(false);
    } catch (error) {
      alert("Update failed");
    } finally {
      setEditLoading(false);
    }
  };

  if (loading) return <p className="text-gray-300">Loading...</p>;
  if (error) return <p className="text-red-500">Failed to load project data.</p>;

  return (
    <>
      <div className="overflow-x-auto border-b border-gray-500 mb-4">
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Tech Stack</th>
              <th>Links</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 object-contain"
                  />
                </td>
                <td className="font-semibold">{item.title}</td>
                <td>{item.description}</td>
                <td className="text-sm">{item.techStack.join(", ")}</td>
                <td>
                  {item.github && (
                    <a href={item.github} target="_blank" rel="noreferrer" className="link link-info">
                      GitHub
                    </a>
                  )}
                  <br />
                  {item.view && (
                    <a href={item.view} target="_blank" rel="noreferrer" className="link link-success">
                      Live
                    </a>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-error btn-outline hover:bg-red-600 hover:text-white"
                    onClick={() => handleDelete(item.id)}
                    disabled={deleteLoadingId === item.id}
                  >
                    {deleteLoadingId === item.id ? "Deleting..." : "Delete"}
                  </button>
                  <button
                    className="btn btn-sm btn-info btn-outline hover:bg-blue-600 hover:text-white ml-2"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <form
            onSubmit={handleUpdateSubmit}
            className="bg-black rounded-lg p-6 w-full max-w-lg space-y-4 border border-gray-500"
          >
            <h2 className="text-xl text-white font-bold mb-2">Edit Project</h2>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
            <textarea
              placeholder="Description"
              className="textarea textarea-bordered w-full"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Tech Stack (comma separated)"
              className="input input-bordered w-full"
              value={form.techStack}
              onChange={(e) => setForm({ ...form, techStack: e.target.value })}
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
            <input
              type="url"
              placeholder="GitHub Link (optional)"
              className="input input-bordered w-full"
              value={form.github}
              onChange={(e) => setForm({ ...form, github: e.target.value })}
            />
            <input
              type="url"
              placeholder="Live Site Link (optional)"
              className="input input-bordered w-full"
              value={form.view}
              onChange={(e) => setForm({ ...form, view: e.target.value })}
            />

            <div className="flex justify-end gap-2 mt-4">
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

export default ProjectTable;
