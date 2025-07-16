import { useState, useEffect } from "react";
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
      .get("http://localhost:5000/techstack")
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
              className="flex flex-row items-center justify-center gap-2 rounded-sm border border-gray-300 bg-black p-2"
            >
              <img src={tech.image} alt={tech.name} className="h-auto w-8" />
              <p className="text-md text-white">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TechStack;
