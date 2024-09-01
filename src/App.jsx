import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Luxbite from "./Pages/Luxbite";
import Navbar from "./components/Navbar";
import RandomStuff from "./Pages/RandomStuff";
import Project3 from "./Pages/Project3";
import Project4 from "./Pages/Project4";
import "./Style/Navbar.css";
import About from "./Pages/About";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"element={<> <LandingPage /></>} />
        <Route path="/luxbite-project" element={<Luxbite />} />
        <Route path="/randomStuff" element={<RandomStuff />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
