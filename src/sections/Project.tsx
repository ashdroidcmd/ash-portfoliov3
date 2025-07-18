import ProjectCards from "../components/ProjectCards";

const Project = () => {
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
      <ProjectCards />
    </section>
  );
};

export default Project;
