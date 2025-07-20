import { useTechStackApi } from "../../src/hooks/useTechStack";

const TechStack = () => {
  const { data: techStack, loading, error } = useTechStackApi();

  if (error) return <p className="text-red-500">Error loading tech stack</p>;
  if (loading) return <p className="text-gray-400">Loading...</p>;

  return (
    <>
      <section className="mb-6">
        <p className="mb-4 text-3xl font-semibold text-white">Tech Stack</p>
        <div className="flex flex-row flex-wrap gap-2">
          {techStack.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center gap-2 rounded-4xl border border-gray-500 bg-black px-4 py-1 transition-colors duration-300 hover:bg-gray-800"
            >
              <img src={item.image} alt={item.name} className="h-auto w-8" />
              <p className="text-base text-white">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TechStack;
