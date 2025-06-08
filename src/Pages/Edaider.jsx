import React, { useEffect } from "react";
import "../Style/Edaider.css";
import thesis from "../assets/Examensarbete_Niloofar-Shahsavar_Juni2025.pdf";

const Edaider = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div> <div className="EdAiderPage"> 
 <h1>EdAider – Case Study</h1>
      <section id="section-thesis" className="section-thesis">
              <div className="thesis-div">
                <div className="thesis-border-div">
                  <h3 className="common-title">Thesis</h3>
                  <a href={thesis} target="_blank">
                    Click to view My thesis
                  </a>
                </div>
              </div>
            </section>
      </div>

      <div className="edaider-description">
        <div className="edaider-descriptionTitle">
          <h2>Improving Activation in AI Education for School Staff</h2>
        </div>

        <div className="project-section">
          <h3>Project Type:</h3>
          UX Research, UX Design
          <h3>Role:</h3>
          UX Researcher
          <h3>Tools:</h3>
          Figma, Miro, Notion, Hotjar, NotbookLM, Metabase, Dovetail, AI Tools
          <h3>Methods:</h3>
          Interviews, Data Analysis, Journey Mapping, Prototyping
          <h3>Timeline:</h3>
          April – June 2025 (10 weeks)
        </div>

        <div className="project-section">
          <h3>The Challenge</h3>
          <p>
          Many participants in EdAider’s AI course never logged in or failed to complete it. My task was to investigate why and propose solutions.
          </p>
        </div>

        <div className="project-section">
          <h3>Methodology</h3>
          <ul>
            <li>Analyzed login and participation data (300 users)</li>
            <li>Conducted interviews with teachers and principals</li>
            <li>Segmented user types based on engagement</li>
            <li>Formulated two main hypotheses: one organizational, one user-focused</li>
          </ul>
        </div>

        <div className="project-section">
          <h3>Solutions</h3>
          <ul>
            <li>Designed a new format: joint kickoff, individual work, and group wrap-up</li>
            <li>Proposed group tasks and simplified login process</li>
            <li>Created wireframes and user flow improvements in Figma</li>
            <li>Suggested better communication and course introduction strategies</li>
          </ul>
        </div>

        <div className="project-section">
          <h3>Results</h3>
          <p>
          <li>The concept will be piloted in June 2025</li>
            <li>The team has decided to prioritize the new course structure</li>
            <li>I delivered actionable design materials and strategic proposals for implementation</li>
          </p>
        </div>
      </div>



    </div>
  );
};

export default Edaider;