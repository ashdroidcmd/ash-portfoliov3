import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main
import MainLayout from "./layout/MainLayout";
import ScrollToTop from "./utils/ScrollToTop";
import HomePage from "./pages/main/HomePage";
import MainProjectPage from "./pages/main/ProjectPage";

// Admin
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import QualificationsPage from "./pages/admin/QualificationsPage";
import TechStackPage from "./pages/admin/TechStackPage";
import AdminProjectPage from "./pages/admin/ProjectPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public routes wrapped in MainLayout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<MainProjectPage />} />
          </Route>

          {/* Dashboard routes wrapped in AdminLayout */}
          <Route path="/123456" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="qualifications" element={<QualificationsPage />} />
            <Route path="tech-stack" element={<TechStackPage />} />
            <Route path="projects" element={<AdminProjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
