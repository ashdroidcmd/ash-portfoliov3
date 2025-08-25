import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import projects from "../data/projects.json";
import Carousel from "./Carousel";

interface ProjectCardsProps {
  perPage?: number;
  category?: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  perPage = 4,
  category,
  currentPage,
  setCurrentPage,
}) => {
  const [carouselImages, setCarouselImages] = useState<string[] | null>(null);

  // Filter by category if provided
  let projectData = category
    ? projects.filter((p) => p.category === category)
    : projects;

  // ✅ Sort date ascending
  projectData = [...projectData].sort(
    (b, a) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  );

  const totalProjects = projectData.length;
  const totalPages = Math.ceil(totalProjects / perPage);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedProjects = projectData.slice(start, end);

  return (
    <>
      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {paginatedProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl border border-gray-400 bg-black"
          >
            <img
              src={project.imagesUrl[0]}
              alt={project.title}
              className="h-40 w-full cursor-pointer rounded-xl object-cover"
              onClick={() => setCarouselImages(project.imagesUrl)}
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
                {project.githubUrl && (
                  <Link
                    to={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-outline rounded-2xl border-gray-500 px-6 hover:bg-white hover:text-black">
                      Repo
                    </button>
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    to={project.liveUrl}
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

      {/* DaisyUI Carousel Modal */}
      {carouselImages && (
        <Carousel
          images={carouselImages}
          onClose={() => setCarouselImages(null)}
        />
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProjectCards;
