import CreateEducation from "../../components/admin/CreateEducation"
import EducationTable from "../../components/admin/EducationTable"


const QualificationsPage = () => {
  return (
    <>
    <p className="text-xl font-semibold mb-4">Education</p>
    <CreateEducation />
    <EducationTable />
    </>
  )
}

export default QualificationsPage