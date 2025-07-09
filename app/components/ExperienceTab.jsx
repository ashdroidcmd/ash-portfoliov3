import experienceData from "../data/Experience.json";

export default function ExperienceTab() {
  return (
    <div className="space-y-4">
      {experienceData.map((item, index) => (
        <div key={index} className="border-gray-100 border-l-4 pl-4">
          <p className="text-sm text-gray-300">{item.date}</p>
          <h3 className="text-lg font-semibold text-white">{item.position}</h3>
          <p className="text-base text-gray-300">{item.company}</p>
        </div>
      ))}
    </div>
  );
}
