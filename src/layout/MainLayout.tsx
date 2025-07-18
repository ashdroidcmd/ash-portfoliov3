import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";

const MainLayout = () => {
  return (
    <>
      <body className="mx-auto max-w-4xl p-4">
        <main>
          <Hero />
          <Outlet />
        </main>
        <Footer />
      </body>
    </>
  );
};

export default MainLayout;
