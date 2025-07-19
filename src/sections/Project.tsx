import ProjectCards from "../components/main/ProjectCards";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section className="mb-6">
      {/* Header */}
      <div className="mb-4 flex flex-row items-center">
        <p className="grow text-3xl font-semibold text-white">Projects</p>
        <Link
          to="projects"
          className="btn btn-outline btn-md rounded-2xl hover:bg-white hover:text-black"
        >
          View More
        </Link>
      </div>

      {/* Cards */}
      <ProjectCards />
    </section>
  );
};

export default Project;
