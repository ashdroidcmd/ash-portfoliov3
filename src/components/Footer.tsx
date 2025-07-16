import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <section className="border-t border-t-gray-400">
        <div className="flex flex-row py-4">
          <p className="grow text-white">Ash</p>
          <div className="flex flex-row space-x-4">
            <Github />
            <Linkedin />
            <Mail />
          </div>
        </div>
      </section>
  )
}

export default Footer