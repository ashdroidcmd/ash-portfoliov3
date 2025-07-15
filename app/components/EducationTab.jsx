"use client";
import { useEffect, useState } from "react";

export default function EducationTab() {
  const [educationData, setEducationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/education") // 👈 or your deployed backend URL
      .then((res) => res.json())
      .then((data) => {
        setEducationData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch education data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-400">Loading...</p>;

  return (
    <div className="space-y-4">
      {educationData.map((item, index) => (
        <div key={index} className="border-l-4 border-gray-100 pl-4">
          <h3 className="text-lg font-semibold">{item.courseName}</h3>
          <p className="text-base text-gray-300">{item.school}</p>
        </div>
      ))}
    </div>
  );
}
