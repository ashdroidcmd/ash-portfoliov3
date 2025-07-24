import CreateProject from "../../components/admin/CreateProject";
import ProjectTable from "../../components/admin/ProjectTable";

const ProjectPage = () => {
  return (
    <>
      <p className="mb-4 text-xl font-semibold">Projects</p>
      <CreateProject />
      <ProjectTable />
    </>
  );
};

export default ProjectPage;
