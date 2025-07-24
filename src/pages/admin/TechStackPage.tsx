import TechStackTable from "../../components/admin/TechStackTable";
import CreateTechStack from "../../components/admin/CreateTechStack";

const TechStackPage = () => {
  return (
    <>
      <p className="mb-4 text-xl font-semibold">Tech Stack</p>
      <CreateTechStack />
      <TechStackTable />
    </>
  );
};

export default TechStackPage;
