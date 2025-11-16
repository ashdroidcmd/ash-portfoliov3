import { useState } from "react";
import techStackData from "../data/techStack.json";
import { Terminal } from "lucide-react";

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
        <p className="flex grow flex-row items-center gap-2 text-2xl font-semibold text-white md:text-3xl">
          <Terminal size={35} className="text-green-500" />
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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {filteredTechStack.map((item, index) => (
          <div
            key={index}
            className="card h-28 w-24 border border-gray-500 bg-black shadow-md transition-transform duration-300 hover:scale-110 hover:bg-gray-800"
          >
            <figure className="p-2">
              <img
                src={item.image}
                alt={item.name}
                className="h-12 w-12 object-contain"
              />
            </figure>
            <div className="card-body items-center justify-center p-1">
              <p className="text-center text-sm text-white">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
