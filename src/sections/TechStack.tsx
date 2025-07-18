import { useState, useEffect } from "react";
import { getApiUrl } from "../utils/api";
import axios from "axios";

type Tech = {
  image: string;
  name: string;
};

const TechStack = () => {
  const [techStack, setTechStack] = useState<Tech[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${getApiUrl}/techstack`)
      .then((res) => {
        setTechStack(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch Tech Stack Data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-400">Loading...</p>;

  return (
    <>
      <section className="mb-6">
        <p className="mb-4 text-3xl font-semibold text-white">Tech Stack</p>
        <div className="flex flex-row flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center gap-2 rounded-4xl border border-gray-500 bg-black px-4 py-1 transition-colors duration-300 hover:bg-gray-800"
            >
              <img src={tech.image} alt={tech.name} className="h-auto w-8" />
              <p className="text-base text-white">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TechStack;
