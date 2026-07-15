import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import BusinessCard from "@/pages/BusinessCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/business-card" element={<BusinessCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
