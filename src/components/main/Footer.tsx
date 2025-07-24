import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="border-t border-t-gray-500">
      <div className="flex flex-row items-center p-4">
        <p className="grow font-semibold text-white">
          &copy; 2025 Ashlee Zoe Gesite. All rights reserved.{" "}
        </p>
        <div className="flex flex-row space-x-4">
          <Link
            to="https://github.com/ashdroidcmd"
            target="_blank"
            className="cursor-pointer transition duration-150 hover:scale-125"
          >
            <Github size={30} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/ash-gesite-25a28334b/"
            target="_blank"
            className="cursor-pointer transition duration-150 hover:scale-125"
          >
            <Linkedin size={30} />
          </Link>
          <Link
            to="#"
            target="_blank"
            className="cursor-pointer transition duration-150 hover:scale-125"
          >
            <Mail size={30} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
