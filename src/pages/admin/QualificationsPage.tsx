import CreateEducation from "../../components/admin/CreateEducation";
import EducationTable from "../../components/admin/EducationTable";
import CreateExperience from "../../components/admin/CreateExperience";
import ExperienceTable from "../../components/admin/ExperienceTable";

const QualificationsPage = () => {
  return (
    <>
      <p className="mb-4 text-xl font-semibold">Education</p>
      <CreateEducation />
      <EducationTable />
      <p className="mb-4 text-xl font-semibold">Experience</p>
      <CreateExperience />
      <ExperienceTable />
    </>
  );
};

export default QualificationsPage;
