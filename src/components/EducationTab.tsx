import { Link } from "react-router-dom";
import { useEducationApi } from "../hooks/useEducation";

const EducationTab = () => {
  const { data: educationData, loading, error } = useEducationApi();

  if (error) return <p className="text-red-500">Error loading education</p>;
  if (loading) return <p className="text-gray-300">Loading...</p>;

  return (
    <section className="space-y-4">
      {educationData.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-start gap-2 border-l-4 border-gray-100 pl-4"
        >
          <div>
            <img
              src={item.image}
              alt={item.school}
              className="h-18 w-18 rounded-full border bg-white object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{item.courseName}</h3>
            <p className="mb-1 text-base text-gray-300">{item.school}</p>
            <Link
              to={item.url}
              target="_blank"
              className="btn btn-sm btn-outline hover:bg-white hover:text-black"
            >
              View Certificate
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EducationTab;
