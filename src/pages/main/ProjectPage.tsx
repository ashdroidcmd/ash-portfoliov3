import ProjectCards from "../../components/main/ProjectCards";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <section>
      <div className="mb-4 pb-4 flex flex-row items-center justify-between border-b border-gray-500">
        <div>
          <h1 className="text-2xl font-semibold text-white md:text-3xl">
            All Projects
          </h1>
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
        <p className="mb-2 text-gray-300">
          Here are all the projects I've worked on. Feel free to explore and
          check them out!
        </p>
        <ProjectCards limit={0} />
      </div>
    </section>
  );
};

export default ProjectPage;
