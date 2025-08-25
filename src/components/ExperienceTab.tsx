import experienceData from "../data/experience.json";

const ExperienceTab = () => {
  return (
    <section className="space-y-4">
      {experienceData.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-start gap-2 border-l-4 border-gray-100 pl-2"
        >
          <div>
            <img
              src={item.logo}
              alt={item.companyName}
              className="h-18 w-18 rounded-full border bg-white object-contain"
            />
          </div>
          <div>
            <p className="text-sm text-gray-300">{item.dates}</p>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-base text-gray-300">{item.companyName}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceTab;
