import { Outlet } from "react-router-dom";
import Footer from "../components/main/Footer";
import Hero from "../sections/Hero";

const MainLayout = () => {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <main>
        <Hero />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
