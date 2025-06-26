import React, { useEffect } from "react";
import "../Style/Edaider.css";
import thesis from "../assets/Thesis_Niloofar-Shahsavar_June-2025.pdf";

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
                   <button>Click to view My thesis</button>
                  </a>
                </div>
              </div>
            </section>
      </div>

      <div className="edaider-description">
        <div className="edaider-descriptionTitle">
          <h2>Improving Activation & Completion in AI Education</h2>
        </div>

        <div className="project-section">
          <h3>Project Type:</h3>
          UX Research, UX Design
          <h3>Role:</h3>
          UX Researcher & Designer—leading research, design ideation, prototyping, and collaboration with stakeholders.
          <h3>Tools:</h3>
          Figma, Miro, Notion, Hotjar, NotbookLM, Metabase, Dovetail, AI Tools
          <h3>Methods:</h3>
          Interviews, Data Analysis, Journey Mapping, Prototyping
          <h3>Timeline:</h3>
          April – June 2025 (10 weeks)
          <h3>Team:</h3>
          Solo UX effort supported by EdAider’s product team, school leaders (principals, ICT strategists), and a frontend developer.
        </div>

        <div className="project-section">
          <h3>The Challenge</h3>
         
            <ul>
          	<li>Only 13% of welcome emails are opened; 76% of those lead to clicks—meaning the main drop-off is before users even engage.</li>
	<li>Teachers often miss the email, misunderstand the training context, or deprioritize it due to workload and digital uncertainty.</li>
	<li>Those who do start find the course relevant—but activation barriers lie in onboarding, motivation, and organizational communication, not in the content.</li>
         </ul> 
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