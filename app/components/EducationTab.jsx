import educationData from "../data/Education.json";

export default function EducationTab() {
  return (
    <div className="space-y-4">
      {educationData.map((item, index) => (
        <div key={index} className="border-l-4 border-gray-100 pl-4">
          <h3 className="text-lg font-semibold">{item.program}</h3>
          <p className="text-base text-gray-300">{item.institution}</p>
        </div>
      ))}
    </div>
  );
}
