import React, { useState } from "react";
import { useExperienceApi } from "../../hooks/useExperience";

const CreateExperience = () => {
  const { createExperience, loading } = useExperienceApi();

  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!companyName || !jobTitle || !date || !image) {
      setError("Please fill in all fields");
      return;
    }

    setError(null);

    try {
      await createExperience({ companyName, jobTitle, date, image });
      setCompanyName("");
      setJobTitle("");
      setDate("");
      setImage("");
    } catch {
      setError("Failed to create experience entry");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded border-gray-500 mb-4">
      <div className="flex flex-row items-center mb-4">
        <div className="flex-1 grow">
          <h2 className="text-xl text-white">Add New Experience</h2>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div>
          <button
            type="submit"
            className={`btn btn-outline hover:bg-white hover:text-black ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Saving..." : "Add Experience"}
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <input
          type="url"
          placeholder="Image URL from Cloudinary"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
    </form>
  );
};

export default CreateExperience;
