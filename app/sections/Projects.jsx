import projects from "../data/Projects.json";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section className="mx-auto max-w-4xl p-4">
      {/* Header */}
      <div className="mb-6 flex flex-row items-center">
        <p className="grow text-3xl font-semibold text-white">Projects</p>
        <button className="btn btn-info">View More</button>
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
}
