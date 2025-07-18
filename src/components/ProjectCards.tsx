import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  view: string;
};

const ProjectCards = () => {
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
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {projects.slice(0, 4).map((project, index) => (
        <div key={index} className="rounded-xl border border-gray-400 bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="h-40 w-full rounded-xl object-cover"
          />
          <div className="p-4">
            <h3 className="text-center text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-md mb-2 text-gray-300">{project.description}</p>

            <div className="mb-3 flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="gap-2 rounded-4xl border border-gray-500 bg-black px-4 text-sm text-white transition-colors duration-300 hover:bg-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {project.github && (
                <Link
                  to={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-outline rounded-2xl border-gray-500 px-6 hover:bg-white hover:text-black">
                    Repo
                  </button>
                </Link>
              )}
              {project.view && (
                <Link
                  to={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-outline rounded-2xl border-gray-500 px-6 hover:bg-white hover:text-black">
                    View Live
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
