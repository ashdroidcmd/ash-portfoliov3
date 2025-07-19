import TechStackTable from "../../components/admin/TechStackTable"
import CreateTechStack from "../../components/admin/CreateTechStack"

const TechStackPage = () => {
  return (
    <>
    <p className="text-xl font-semibold mb-4">Tech Stack</p>
    <CreateTechStack />
    <TechStackTable />
    </>
  )
}

export default TechStackPage