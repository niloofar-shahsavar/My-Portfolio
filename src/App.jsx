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
import Blog from "./Pages/Blog"

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
        <Route path="/luxbite-project" element={<Luxbite />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/randomStuff" element={<RandomStuff />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/HPAppen" element={<HPAppen />} />
        <Route path="/Edaider" element={<Edaider />} />
        <Route path="/about" element={<About />} />
        <Route path="/interaction" element={<InterAction />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
