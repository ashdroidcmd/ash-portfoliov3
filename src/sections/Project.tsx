import { useState } from "react";
import { FolderGit2 } from "lucide-react";
import ProjectCards from "../components/ProjectCards";

const categories = ["All", "Web Development", "IoT"];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // 🔁 Reset to page 1 when category changes
  };

  return (
    <section className="mb-6">
      {/* Header */}
      <div className="mb-4 flex flex-row items-center">
        <p className="grow text-2xl font-semibold text-white md:text-3xl flex flex-row items-center gap-2">
          <FolderGit2 size={35} className="text-blue-400"/>Projects
        </p>

        {/* Dropdown */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="rounded-2xl border border-gray-500 bg-black px-3 py-2 text-white"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <ProjectCards
        category={selectedCategory === "All" ? "" : selectedCategory}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default Project;
