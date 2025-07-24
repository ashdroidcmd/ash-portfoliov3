import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-12 px-4 py-18 md:flex-row">
      {/* Text Content */}
      <div className="flex-1 justify-center text-center md:text-left">
        <p className="mb-6 text-4xl font-semibold text-white">
          Ashlee Zoe Gesite
        </p>
        <p className="mb-1 text-2xl">Full Stack Developer</p>
        <p className="mb-4 text-xl text-gray-300">Bohol, Philippines</p>

        <div className="mb-4 flex justify-center space-x-4 md:justify-start">
          <Link
            to="https://github.com/ashdroidcmd"
            target="_blank"
            className="cursor-pointer transition duration-150 hover:scale-125"
          >
            <Github size={36} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/ash-gesite-25a28334b/"
            target="_blank"
            className="cursor-pointer transition duration-150 hover:scale-125"
          >
            <Linkedin size={36} />
          </Link>
          <Link
            to="#"
            target="_blank"
            className="cursor-pointer transition duration-150 hover:scale-125"
          >
            <Mail size={36} />
          </Link>
        </div>

        <div className="flex justify-center gap-2 md:justify-start">
          <button className="btn btn-outline btn-md rounded-2xl hover:bg-white hover:text-black">
            Resume
          </button>
          <button className="btn btn-outline btn-md rounded-2xl hover:bg-white hover:text-black">
            Contact Me
          </button>
        </div>
      </div>

      {/* Centered Image Content */}
      <div className="flex flex-1 items-center justify-center">
        <img
          src="./profile.jpg"
          alt="Profile"
          className="w-60 rounded-full border border-gray-500"
        />
      </div>
    </section>
  );
};

export default Hero;
