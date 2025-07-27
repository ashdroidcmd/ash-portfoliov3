import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main
import MainLayout from "./layout/MainLayout";
import ScrollToTop from "./utils/ScrollToTop";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
