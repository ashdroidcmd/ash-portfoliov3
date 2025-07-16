import { useEffect, useState } from "react";
import axios from "axios";

type Education = {
    courseName: string;
    school: string;
};

const EducationTab = () => {
    const [educationData, setEducationData] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/education")
      .then((res) => {
        setEducationData(res.data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch Education data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-400">Loading...</p>;

  return (
    <section className="space-y-4">
      {educationData.map((item, index) => (
        <div key={index} className="border-l-4 border-gray-100 pl-4">
          <h3 className="text-lg font-semibold">{item.courseName}</h3>
          <p className="text-base text-gray-300">{item.school}</p>
        </div>
      ))}
    </section>
  )
}

export default EducationTab