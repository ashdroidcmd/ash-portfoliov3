export default function Experience() {
  return (
    <section className="mx-auto max-w-4xl p-2">
      <div>
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Experience"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Experience
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Education"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Education
          </div>
        </div>
      </div>
    </section>
  );
}
