"use client";
import { useEffect, useState } from "react";

export default function ExperienceTab() {
  const [experienceData, setExperienceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/experiences") // or your deployed backend URL
      .then((res) => res.json())
      .then((data) => {
        setExperienceData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch experience data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-400">Loading...</p>;

  return (
    <div className="space-y-4">
      {experienceData.map((item, index) => (
        <div key={index} className="border-l-4 border-gray-100 pl-4">
          <p className="text-sm text-gray-300">{item.date}</p>
          <h3 className="text-lg font-semibold text-white">{item.jobTitle}</h3>
          <p className="text-base text-gray-300">{item.companyName}</p>
        </div>
      ))}
    </div>
  );
}
