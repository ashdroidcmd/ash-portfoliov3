import { useState, type FormEvent } from "react";
import { useTechStackApi } from "../../hooks/useTechStack";

type TechStack = {
  id: number;
  name: string;
  image: string;
};

const TechStackTable = () => {
  const {
    data,
    loading,
    error,
    createTechStack,
    updateTechStack,
    deleteTechStack,
  } = useTechStackApi();

  const [form, setForm] = useState<Omit<TechStack, "id">>({
    name: "",
    image: "",
  });
  const [editId, setEditId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const resetForm = () => {
    setForm({ name: "", image: "" });
    setEditId(null);
    setFormError(null);
  };

  const openModal = (item?: TechStack) => {
    if (item) {
      setForm({ name: item.name, image: item.image });
      setEditId(item.id);
    } else {
      resetForm();
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.image) {
      setFormError("All fields are required.");
      return;
    }

    setActionLoading(true);
    try {
      if (editId !== null) {
        await updateTechStack(editId, form);
      } else {
        await createTechStack(form);
      }
      closeModal();
    } catch {
      setFormError("Failed to save tech stack. Please try again.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this tech stack?")) {
      await deleteTechStack(id);
    }
  };

  if (loading) return <p className="text-gray-400">Loading...</p>;
  if (error)
    return (
      <p className="text-red-500">
        {typeof error === "string" ? error : error.message || String(error)}
      </p>
    );

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-zebra table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 object-contain"
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline btn-info mr-2"
                    onClick={() => openModal(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline btn-error"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-4 rounded-lg border border-gray-600 bg-black p-6"
          >
            <h2 className="text-xl font-bold text-white">
              {editId !== null ? "Edit Tech Stack" : "Add Tech Stack"}
            </h2>

            {formError && <p className="text-red-500">{formError}</p>}

            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Tech Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="url"
              className="input input-bordered w-full"
              placeholder="Image URL"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              required
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="btn btn-outline btn-error"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`btn btn-outline btn-info ${actionLoading ? "loading" : ""}`}
              >
                {editId !== null ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default TechStackTable;
