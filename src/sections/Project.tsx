import { useState, useEffect } from "react";
import axios from "axios";

type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  view: string;
};

const Project = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch Project Data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-400">Loading...</p>;

  return (
    <section className="mb-6">
      {/* Header */}
      <div className="mb-4 flex flex-row items-center">
        <p className="grow text-3xl font-semibold text-white">Projects</p>
        <button className="btn btn-outline btn-md rounded-2xl hover:bg-white hover:text-black">
          View More
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {projects.slice(0, 4).map((project, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-400 bg-black shadow-md"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full rounded-xl object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-md mb-2 text-gray-300">
                {project.description}
              </p>

              <div className="mb-3 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="badge badge-outline badge-info text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-md btn-outline btn-info rounded-2xl">
                    Repo
                  </button>
                </a>
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-md btn-outline btn-info rounded-2xl">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
