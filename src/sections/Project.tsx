import { useState } from "react";
import ProjectCards from "../components/ProjectCards";

const categories = ["All", "Web Development", "IoT"];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="mb-6">
      {/* Header */}
      <div className="mb-4 flex flex-row items-center">
        <p className="grow text-2xl md:text-3xl font-semibold text-white">Projects</p>

        {/* Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-2xl border border-gray-500 bg-black py-2 px-3 text-white"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <ProjectCards category={selectedCategory === "All" ? "" : selectedCategory} />
    </section>
  );
};

export default Project;
