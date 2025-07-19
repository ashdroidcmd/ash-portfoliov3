import React, { useState } from "react";
import { useTechStackApi } from "../../hooks/useTechStack";

const CreateTechStack = () => {
  const { createTechStack, loading } = useTechStackApi();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !image) {
      setError("Please fill in all fields");
      return;
    }

    setError(null);

    try {
      await createTechStack({ name, image });
      setName("");
      setImage("");
    } catch {
      setError("Failed to create tech stack");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded border-gray-500 mb-4"
    >
      <div className="flex flex-row items-center mb-4">
        <div className="flex-1 grow">
          <h2 className="text-xl text-white">Add New Tech Stack</h2>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div>
          <button
            type="submit"
            className={`btn btn-outline hover:bg-white hover:text-black ${
              loading ? "loading" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Saving..." : "Add Tech Stack"}
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <input
          type="text"
          placeholder="Tech Name (e.g., React)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <input
          type="url"
          placeholder="Image URL (Cloudinary preferred)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
    </form>
  );
};

export default CreateTechStack;
