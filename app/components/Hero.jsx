export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl p-2">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p>Ashlee Zoe Gesite</p>
          <p>Full Stack Developer</p>
          <p>Bohol, Philippines</p>
          <button className="btn">Resume</button>
          <button className="btn">Contact Me</button>

          <div className="flex flex-row space-x-4">
            <p>Github</p>
            <p>Linkedin</p>
            <p>Gmail</p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
}
