import { useEffect, useState } from "react";
import axios from "axios";

type Experience = {
  date: string;
  jobTitle: string;
  companyName: string;
  image: string;
};

const ExperienceTab = () => {
  const [experienceData, setExperienceData] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/experiences")
      .then((res) => {
        setExperienceData(res.data); // Axios auto-parses JSON
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch Experiences data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-300">Loading...</p>;

  return (
    <section className="space-y-4">
      {experienceData.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-start gap-2 border-l-4 border-gray-100 pl-2"
        >
          <div>
            <img
              src={item.image}
              alt={item.companyName}
              className="h-18 w-18 rounded-full border bg-white object-contain"
            />
          </div>
          <div>
            <p className="text-sm text-gray-300">{item.date}</p>
            <h3 className="text-lg font-semibold text-white">
              {item.jobTitle}
            </h3>
            <p className="text-base text-gray-300">{item.companyName}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceTab;
