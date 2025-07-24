import { useState } from "react";
import { useTechStackApi } from "../../src/hooks/useTechStack";

const categories = ["All", "Web Development", "IoT", "Tools"];

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const {
    data: techStack,
    loading,
    error,
  } = useTechStackApi(selectedCategory === "All" ? "" : selectedCategory);

  return (
    <section className="mb-6">
      <div className="flex flex-row items-center">
        <p className="mb-4 text-2xl md:text-3xl font-semibold text-white grow">Tech Stack</p>

        {/* Dropdown UI */}
        <div className="mb-4">
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
      </div>

      {/* Loading / Error */}
      {error && <p className="text-red-500">Error loading tech stack</p>}
      {loading && <p className="text-gray-400">Loading...</p>}

      {/* Tech Stack Items */}
      <div className="flex flex-row flex-wrap gap-2">
        {techStack.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-center gap-2 rounded-4xl border border-gray-500 bg-black px-4 py-1 transition-colors duration-300 hover:bg-gray-800"
          >
            <img src={item.image} alt={item.name} className="h-auto w-8" />
            <p className="text-base text-white">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
