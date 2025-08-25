import { useState } from "react";
import techStackData from "../data/techStack.json";

const categories = ["All", "Web Development", "IoT", "Tools"];

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter tech stack based on category
  const filteredTechStack =
    selectedCategory === "All"
      ? techStackData
      : techStackData.filter((item) => item.category === selectedCategory);

  return (
    <section className="mb-6">
      <div className="flex flex-row items-center">
        <p className="mb-4 grow text-2xl font-semibold text-white md:text-3xl">
          Tech Stack
        </p>

        {/* Dropdown UI */}
        <div className="mb-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-2xl border border-gray-500 bg-black px-3 py-2 text-white"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tech Stack Items */}
      <div className="flex flex-row flex-wrap gap-2">
        {filteredTechStack.map((item, index) => (
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
