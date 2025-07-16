import "./App.css";
import Hero from "./sections/Hero";
import ExAndEducTabs from "./sections/ExAndEducTabs";
import TechStack from "./sections/TechStack";
import Project from "./sections/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="mx-auto max-w-4xl p-4">
        <Hero />
        <ExAndEducTabs />
        <TechStack />
        <Project />
        <Footer />
      </section>
    </>
  );
}

export default App;
