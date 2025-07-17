import EducationTab from "../components/EducationTab";
import ExperienceTab from "../components/ExperienceTab";

const ExAndEducTabs = () => {
  return (
    <>
      <section className="mb-6">
        <div className="tabs tabs-lift w-full">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab flex-1 text-xl font-semibold"
            aria-label="Experience"
            defaultChecked
          />
          <div className="tab-content bg-base-100 p-2">
            <ExperienceTab />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab flex-1 text-xl font-semibold"
            aria-label="Education"
          />
          <div className="tab-content bg-base-100 p-2">
            <EducationTab />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExAndEducTabs;
