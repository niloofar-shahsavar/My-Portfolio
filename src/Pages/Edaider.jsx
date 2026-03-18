import React, { useEffect } from "react";
import "../Style/Edaider.css";
import thesis from "../assets/Thesis_Niloofar-Shahsavar_June-2025.pdf";

const Edaider = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="edaiderPage">
      <div className="edaider-container">
        <h1 className="edaider-title">EdAider</h1>
        <p className="edaider-subtitle">Improving Activation & Completion in AI Education</p>

        {/* IMAGE PLACEHOLDER - Add hero image of the EdAider platform or thesis visual */}
        <div className="image-placeholder hero-placeholder">
          <span>EdAider Platform Hero Image</span>
        </div>

        <div className="edaider-content">
          <h2>Overview</h2>
          <p>
            EdAider is an AI-powered educational platform designed to help teachers
            integrate artificial intelligence into their teaching practice. This case study
            explores my UX research and design work focused on understanding why teachers
            weren't engaging with the platform and developing solutions to improve
            activation and course completion rates.
          </p>

          <h2>Project Details</h2>
          <div className="project-meta">
            <div className="meta-item">
              <h3>Project Type</h3>
              <p>UX Research, UX Design</p>
            </div>
            <div className="meta-item">
              <h3>Role</h3>
              <p>UX Researcher & Designer</p>
            </div>
            <div className="meta-item">
              <h3>Tools</h3>
              <p>Figma, Miro, Notion, Hotjar, NotebookLM, Metabase, Dovetail</p>
            </div>
            <div className="meta-item">
              <h3>Timeline</h3>
              <p>April - June 2025 (10 weeks)</p>
            </div>
          </div>

          <h2>Methods & Collaboration</h2>
          <div className="methods-grid">
            <div className="method-item">
              <h3>Research Methods</h3>
              <p>Qualitative Interviews, Data Analysis, Journey Mapping, User Segmentation</p>
            </div>
            <div className="method-item">
              <h3>Team</h3>
              <p>Solo UX effort supported by EdAider's product team, school leaders, and a frontend developer</p>
            </div>
          </div>

          <h2>The Challenge</h2>
          <p>
            EdAider was experiencing significant drop-off in their teacher onboarding process.
            Through data analysis and user research, I uncovered critical insights:
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">13%</span>
              <p>Welcome email open rate</p>
            </div>
            <div className="stat-card">
              <span className="stat-number">76%</span>
              <p>Click-through rate from opened emails</p>
            </div>
            <div className="stat-card highlight">
              <span className="stat-number">Key Insight</span>
              <p>Main drop-off happens before users even engage</p>
            </div>
          </div>
          <p>
            Teachers often missed the welcome email, misunderstood the training context,
            or deprioritized it due to workload and uncertainty about digital tools.
            Those who did start found the course relevant—but activation barriers lay
            in onboarding, motivation, and organizational communication, not in the content itself.
          </p>

          {/* IMAGE PLACEHOLDER - Add user journey map or research findings visual */}
          <div className="image-placeholder">
            <span>User Journey Map / Research Findings Image</span>
          </div>

          <h2>Research Methodology</h2>
          <ul className="features-list">
            <li>Analyzed login and participation data from 300 users</li>
            <li>Conducted in-depth interviews with teachers and principals</li>
            <li>Segmented user types based on engagement patterns</li>
            <li>Formulated two main hypotheses: one organizational, one user-focused</li>
          </ul>

          {/* IMAGE PLACEHOLDER - Add user segmentation or persona visual */}
          <div className="image-placeholder">
            <span>User Segmentation / Persona Image</span>
          </div>

          <h2>Key Insights</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <h3>Organizational Barriers</h3>
              <p>Poor communication from school leadership about training purpose and expectations created confusion and low prioritization.</p>
            </div>
            <div className="insight-card">
              <h3>Motivation Gap</h3>
              <p>Teachers lacked clear understanding of how AI training would benefit their daily work and student outcomes.</p>
            </div>
            <div className="insight-card">
              <h3>Login Friction</h3>
              <p>Technical barriers in the login process caused early abandonment before users could experience the content.</p>
            </div>
          </div>

          <h2>Design Solutions</h2>
          <p>
            Based on my research findings, I developed strategic solutions addressing
            both organizational and user-experience challenges:
          </p>
          <ul className="features-list">
            <li>Designed a new course format: joint kickoff, individual work, and group wrap-up</li>
            <li>Proposed collaborative group tasks to increase engagement and accountability</li>
            <li>Simplified the login process to reduce technical friction</li>
            <li>Created wireframes and user flow improvements in Figma</li>
            <li>Developed better communication and course introduction strategies</li>
          </ul>

          {/* IMAGE PLACEHOLDER - Add wireframes or design solutions visual */}
          <div className="image-placeholder">
            <span>Design Solutions / Wireframes Image</span>
          </div>

          <h2>Results & Impact</h2>
          <div className="results-grid">
            <div className="result-card">
              <h3>Pilot Launch</h3>
              <p>The new course concept is scheduled to pilot in June 2025</p>
            </div>
            <div className="result-card">
              <h3>Team Adoption</h3>
              <p>The product team prioritized implementing the new course structure</p>
            </div>
            <div className="result-card">
              <h3>Deliverables</h3>
              <p>Actionable design materials and strategic proposals ready for implementation</p>
            </div>
          </div>

          <h2>My Role</h2>
          <p>
            As the sole UX Researcher and Designer on this project, I led the entire
            research and design process. This included conducting user interviews,
            analyzing behavioral data, synthesizing findings into actionable insights,
            and collaborating with stakeholders to develop and validate solutions.
            I delivered comprehensive design materials including wireframes, user flows,
            and strategic recommendations.
          </p>

          {/* IMAGE PLACEHOLDER - Add final deliverables visual */}
          <div className="image-placeholder">
            <span>Final Deliverables / Prototype Image</span>
          </div>

          <div className="thesis-section">
            <h2>Read the Full Thesis</h2>
            <p>
              This project was conducted as part of my degree thesis. The complete
              research findings, methodology, and recommendations are documented
              in detail.
            </p>
            <button className="edaider-btn">
              <a href={thesis} target="_blank" rel="noopener noreferrer">
                View Thesis Document
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edaider;
