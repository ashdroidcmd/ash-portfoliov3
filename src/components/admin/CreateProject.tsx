import React, { useState } from "react";
import { useProjectApi } from "../../hooks/useProject";

const CreateProject = () => {
  const { createProject, loading } = useProjectApi();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [github, setGithub] = useState("");
  const [view, setView] = useState("");
  const [techStack, setTechStack] = useState<string>("");

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !image || !techStack) {
      setError("Please fill in all required fields");
      return;
    }

    setError(null);

    try {
      await createProject({
        title,
        description,
        image,
        github: github || undefined,
        view: view || undefined,
        techStack: techStack.split(",").map((s) => s.trim()),
      });

      setTitle("");
      setDescription("");
      setImage("");
      setGithub("");
      setView("");
      setTechStack("");
    } catch {
      setError("Failed to create project");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded border-gray-500 mb-4">
      <div className="flex flex-row items-center mb-4">
        <div className="flex-1 grow">
          <h2 className="text-xl text-white">Add New Project</h2>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div>
          <button
            type="submit"
            className={`btn btn-outline hover:bg-white hover:text-black ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Saving..." : "Add Project"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
          required
        />

        <input
          type="url"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          placeholder="Tech Stack (comma-separated)"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          className="input input-bordered w-full"
          required
        />

        <input
          type="url"
          placeholder="GitHub Link (optional)"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="input input-bordered w-full"
        />

        <input
          type="url"
          placeholder="Live View Link (optional)"
          value={view}
          onChange={(e) => setView(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>

      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="textarea textarea-bordered w-full mt-4"
        rows={4}
        required
      />
    </form>
  );
};

export default CreateProject;
