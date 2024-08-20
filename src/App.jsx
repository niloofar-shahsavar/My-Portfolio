import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Luxbite from "./Pages/Luxbite";
import Navbar from "./components/Navbar";
import Project2 from "./Pages/Project2";
import Project3 from "./Pages/Project3";
import Project4 from "./Pages/Project4";
import "./Style/Navbar.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"element={<> <LandingPage /></>} />
        <Route path="/luxbite-project" element={<Luxbite />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
