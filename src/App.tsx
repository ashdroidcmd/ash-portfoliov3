import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ScrollToTop from "./utils/ScrollToTop";
import HomePage from "./pages/main/HomePage";
import ProjectPage from "./pages/main/ProjectPage";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public routes wrapped in MainLayout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectPage />} />
          </Route>

          {/* Dashboard routes wrapped in AdminLayout */}
          <Route path="/123456" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
