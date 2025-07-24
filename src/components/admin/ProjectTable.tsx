/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useProjectApi } from "../../hooks/useProject";

const ProjectTable = () => {
  const {
    data: projectData,
    loading,
    error,
    deleteProject,
    updateProject,
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
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;

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
      await updateProject(editItem.id, {
        ...form,
        techStack: form.techStack.split(",").map((tech) => tech.trim()),
      });
      setIsModalOpen(false);
    } catch (error) {
      alert("Update failed");
    } finally {
      setEditLoading(false);
    }
  };

  if (loading) return <p className="text-gray-300">Loading...</p>;
  if (error)
    return <p className="text-red-500">Failed to load project data.</p>;

  return (
    <>
      <div className="mb-4 overflow-x-auto border-b border-gray-500">
        <table className="table-zebra table w-full">
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
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="link link-info"
                    >
                      GitHub
                    </a>
                  )}
                  <br />
                  {item.view && (
                    <a
                      href={item.view}
                      target="_blank"
                      rel="noreferrer"
                      className="link link-success"
                    >
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
            <h2 className="mb-2 text-xl font-bold text-white">Edit Project</h2>
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
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
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

export default ProjectTable;
