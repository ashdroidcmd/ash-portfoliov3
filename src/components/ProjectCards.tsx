import { useState } from "react";
import { useProjectApi } from "../hooks/useProject";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

interface ProjectCardsProps {
  perPage?: number;
  category?: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  perPage = 4,
  category,
}) => {
  const { data: projectData, loading, error } = useProjectApi(category);
  const [currentPage, setCurrentPage] = useState(1);

  if (error) return <p className="text-red-500">Error loading projects</p>;
  if (loading) return <p className="text-gray-400">Loading...</p>;
  if (!projectData) return null;

  const totalProjects = projectData.length;
  const totalPages = Math.ceil(totalProjects / perPage);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedProjects = projectData.slice(start, end);

  return (
    <>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {paginatedProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl border border-gray-400 bg-black"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full rounded-xl object-cover"
            />
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-center text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-md mb-2 text-gray-300">
                {project.description}
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-4xl border border-gray-500 bg-black px-4 text-sm text-white hover:bg-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-2">
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default ProjectCards;
