import blogs from "../data/Blog.json";

export default function Blog() {
  return (
    <section className="mx-auto max-w-4xl p-4">
      {/* Header */}
      <div className="mb-6 flex flex-row items-center">
        <p className="grow text-3xl font-semibold text-white">Blog</p>
        <button className="btn btn-info">View More</button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {blogs.slice(0, 4).map((post, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-400 bg-black shadow-md"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-40 w-full rounded-xl object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-white">{post.title}</h3>
              <p className="text-md mb-2 text-gray-300">{post.description}</p>

              <div className="mb-3 flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="badge badge-outline badge-info text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-md btn-outline btn-info rounded-2xl">
                  Read More
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
