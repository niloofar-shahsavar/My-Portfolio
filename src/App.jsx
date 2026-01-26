import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Luxbite from "./Pages/Luxbite";
import Navbar from "./components/Navbar";
import RandomStuff from "./Pages/RandomStuff";
import Project3 from "./Pages/Project3";
import "./Style/Navbar.css";
import About from "./Pages/About";
import InterAction from "./Pages/InterAction";
import Footer from "./components/Footer";
import "./Style/Footer.css";
import HPAppen from "./Pages/HPAppen";
import Edaider from "./Pages/Edaider";
import Blog from "./Pages/Blog";
import UXProjects from "./Pages/UXProjects";
import DevProjects from "./Pages/DevProjects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <LandingPage />
            </>
          }
        />

        <Route path="/ux-projects" element={<UXProjects />} />
        <Route path="/dev-project" element={<DevProjects />} />

        <Route path="/luxbite-project" element={<Luxbite />} />
        <Route path="/HPAppen" element={<HPAppen />} />
        <Route path="/Edaider" element={<Edaider />} />
        <Route path="/interaction" element={<InterAction />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/randomStuff" element={<RandomStuff />} />
        <Route path="/project3" element={<Project3 />} />

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
