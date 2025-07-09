import EducationTab from "../components/EducationTab";
import ExperienceTab from "../components/ExperienceTab";

export default function Experience() {
  return (
    <section className="mx-auto max-w-4xl p-2">
      <div>
        <div className="tabs tabs-lift w-full">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab flex-1"
            aria-label="Experience"
          />
          <div className="tab-content bg-base-100 border-base-300 p-2">
            <ExperienceTab />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab flex-1"
            aria-label="Education"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-2">
            <EducationTab />
          </div>
        </div>
      </div>
    </section>
  );
}
