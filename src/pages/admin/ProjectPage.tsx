import CreateProject from "../../components/admin/CreateProject"
import ProjectTable from "../../components/admin/ProjectTable"

const ProjectPage = () => {
  return (
    <>
    <p className="text-xl font-semibold mb-4">Projects</p>
    <CreateProject />
    <ProjectTable />
    </>
  )
}

export default ProjectPage