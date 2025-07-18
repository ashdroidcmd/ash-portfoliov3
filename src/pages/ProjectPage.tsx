import ProjectCards from "../components/ProjectCards";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <section>
      <div className="mb-6 flex flex-row items-center justify-between border-b border-gray-500">
        <div>
          <h1 className="mb-2 text-3xl font-semibold text-white">
            All Projects
          </h1>
          <p className="mb-2 text-gray-300">
            Here are all the projects I've worked on. Feel free to explore and
            check them out!
          </p>
        </div>

        <div>
          <Link
            to="/"
            className="btn btn-outline btn-md rounded-2xl hover:bg-white hover:text-black"
          >
            Back
          </Link>
        </div>
      </div>

      <div className="mb-6">
        <ProjectCards />
      </div>
    </section>
  );
};

export default ProjectPage;
