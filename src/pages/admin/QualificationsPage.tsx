import CreateEducation from "../../components/admin/CreateEducation"
import EducationTable from "../../components/admin/EducationTable"
import CreateExperience from "../../components/admin/CreateExperience"
import ExperienceTable from "../../components/admin/ExperienceTable"

const QualificationsPage = () => {
  return (
    <>
    <p className="text-xl font-semibold mb-4">Education</p>
    <CreateEducation />
    <EducationTable />
    <p className="text-xl font-semibold mb-4">Experience</p>
    <CreateExperience />
    <ExperienceTable />
    </>
  )
}

export default QualificationsPage