import techStack from "../data/TechStack.json";

export default function TechStack() {
  return (
    <>
      <section className="mx-auto max-w-4xl p-4">
        <p className="mb-6 text-3xl font-semibold text-white">Tech Stack</p>
        <div className="flex flex-row flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center gap-2 rounded-sm border border-gray-300 bg-black p-2"
            >
              <img
                src={tech.image}
                alt={tech.title}
                className="h-auto w-6 grayscale"
              />
              <p className="text-md text-white">{tech.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
