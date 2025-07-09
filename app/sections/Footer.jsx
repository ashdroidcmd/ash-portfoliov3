import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
      <section className="mx-auto max-w-4xl p-2 border-t border-t-gray-400">
        <div className="flex flex-row py-4">
          <p className="grow text-white">Ash</p>
          <div className="flex flex-row space-x-4">
            <Github />
            <Linkedin />
            <Mail />
          </div>
        </div>
      </section>
    </>
  );
}
