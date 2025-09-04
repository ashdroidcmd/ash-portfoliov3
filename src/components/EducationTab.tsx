import { Link } from "react-router-dom";
import educationData from "../data/education.json";

const EducationTab = () => {
  return (
    <section className="space-y-4">
      {educationData.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-start gap-2 border-l-4 border-gray-100 pl-2"
        >
          <div>
            <img
              src={item.logo}
              alt={item.school}
              className="h-18 w-18 rounded-full border bg-white object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{item.courseName}</h3>
            <p className="mb-1 text-base text-gray-300">{item.school}</p>
            <Link
              to={item.certificateUrl}
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
