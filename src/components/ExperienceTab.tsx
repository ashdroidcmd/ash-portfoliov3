import { useExperienceApi } from "../hooks/useExperience";

const ExperienceTab = () => {
  const { data: experienceData, loading, error } = useExperienceApi();

  if (error) return <p className="text-red-500">Error loading experience</p>;
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
