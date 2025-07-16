import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-12 py-18 md:flex-row md:items-center">
      {/* Text Content */}
      <div className="text-center md:text-left">
        <p className="mb-6 text-4xl font-semibold text-white">
          Ashlee Zoe Gesite
        </p>
        <p className="mb-1 text-2xl">Full Stack Developer</p>
        <p className="mb-4 text-xl text-gray-300">Bohol, Philippines</p>

        <div className="mb-4 flex justify-center space-x-4 md:justify-start">
          <Github />
          <Linkedin />
          <Mail />
        </div>

        <div className="flex justify-center gap-2 md:justify-start">
          <button className="btn btn-info btn-outline btn-lg rounded-2xl">
            Resume
          </button>
          <button className="btn btn-info btn-outline btn-lg rounded-2xl">
            Contact Me
          </button>
        </div>
      </div>

      {/* Centered Image Content */}
      <div className="flex justify-center">
        <img src="./profile.jpg" alt="Profile" className="w-60 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
