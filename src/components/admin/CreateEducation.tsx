import React, { useState } from "react";
import { useEducationApi } from "../../hooks/useEducation";

const CreateEducation = () => {
  const { createEducation, loading } = useEducationApi();

  const [courseName, setCourseName] = useState("");
  const [school, setSchool] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!courseName || !school || !image || !url) {
      setError("Please fill all fields");
      return;
    }

    setError(null);

    try {
      await createEducation({ courseName, school, image, url });
      setCourseName("");
      setSchool("");
      setImage("");
      setUrl("");
    } catch {
      setError("Failed to create education entry");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 space-y-4 rounded border border-gray-500 p-4"
    >
      <div className="mb-4 flex flex-row items-center">
        <div className="flex-1 grow">
          <h2 className="text-xl text-white">Add New Education</h2>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div>
          <button
            type="submit"
            className={`btn btn-outline hover:bg-white hover:text-black ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Saving..." : "Add Education"}
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
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          placeholder="School"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="input input-bordered w-full"
          required
        />

        <input
          type="url"
          placeholder="Certificate URL from Google Drive"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
    </form>
  );
};

export default CreateEducation;
