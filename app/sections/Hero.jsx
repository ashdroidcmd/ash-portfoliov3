import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl p-4">
      <div className="grid grid-cols-1 pt-24 pb-10 md:grid-cols-2">
        {/* Text Content */}
        <div>
          <p className="mb-6 text-xl font-semibold text-white md:text-4xl">
            Ashlee Zoe Gesite
          </p>
          <p className="mb-1 text-2xl">Full Stack Developer</p>
          <p className="mb-4 text-xl text-gray-300">Bohol, Philippines</p>

          <div className="mb-4 flex flex-row space-x-4">
            <Github />
            <Linkedin />
            <Mail />
          </div>

          <div className="flex flex-row gap-2">
            <button className="btn">Resume</button>
            <button className="btn">Contact Me</button>
          </div>
        </div>

        {/* Image Content */}
        <div>
          <img src="" alt="Profile" />
        </div>
      </div>
    </section>
  );
}
