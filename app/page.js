import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <Blog />
      <Footer />
    </>
  );
}
