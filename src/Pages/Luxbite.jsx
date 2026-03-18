import React, { useEffect } from "react";
import "../Style/LuxbiteProject.css";
import project1 from "../assets/luxbite-landing.jpg";
import ideamapLuxebite from "../assets/caseStudies/ideamap-luxebite.png";
import wireframeLuxebite from "../assets/caseStudies/wireframe-luxebite.png";
import prototypeLuxebite from "../assets/caseStudies/prototype-luxebite.png";

function Luxbite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="luxbitePage">
      <div className="luxbite-container">
        <h1 className="luxbite-title">LuxeBite</h1>
        <p className="luxbite-subtitle">Elevating Meal Delivery to a Luxury Experience</p>

        <img
          className="luxbite-hero-img"
          src={project1}
          alt="LuxeBite - Premium Meal Delivery Service"
        />

        <div className="luxbite-content">
          <h2>Overview</h2>
          <p>
            LuxeBite was born from a desire to fill a gap in the market: a luxurious
            food experience for those seeking something extraordinary in their daily lives.
            We set out to deliver an exceptional culinary experience straight to the
            customer's doorstep, seamlessly blending convenience with elegance.
          </p>

          <h2>Project Details</h2>
          <div className="project-meta">
            <div className="meta-item">
              <h3>Project Type</h3>
              <p>UX/UI Design, User Research</p>
            </div>
            <div className="meta-item">
              <h3>Role</h3>
              <p>UX/UI Designer</p>
            </div>
            <div className="meta-item">
              <h3>Tools</h3>
              <p>Figma, Notion, Miro, Slack</p>
            </div>
            <div className="meta-item">
              <h3>Timeline</h3>
              <p>January - April 2024 (8 weeks)</p>
            </div>
          </div>

          <h2>Methods & Skills</h2>
          <div className="skills-grid">
            <div className="skills-category">
              <h3>Design Methods</h3>
              <ul>
                <li>Design Thinking</li>
                <li>User Research</li>
                <li>Wireframing & Prototyping</li>
                <li>Human-Centered Design</li>
                <li>How Might We Framework</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>UX Skills</h3>
              <ul>
                <li>User Journey Mapping</li>
                <li>Personas Development</li>
                <li>Lo-fi & Hi-fi Prototyping</li>
                <li>Usability Testing</li>
                <li>Information Architecture</li>
              </ul>
            </div>
          </div>

          <h2>The Vision</h2>
          <p>
            Our goal was to transform everyday moments into something special by offering
            luxurious meal boxes that add a touch of gold to the ordinary routine.
            LuxeBite isn't just about food—it's about elevating the mundane to the extraordinary.
          </p>

          <img
            className="luxbite-process-img"
            src={ideamapLuxebite}
            alt="LuxeBite Ideation Map"
          />

          <h2>Target Audience</h2>
          <p>
            LuxeBite is designed for the upper-middle class in Stockholm—individuals
            who appreciate luxury in their daily lives. Our target audience includes:
          </p>
          <ul className="features-list">
            <li>Middle managers looking to impress colleagues with premium catering</li>
            <li>Groups of friends seeking to elevate their gatherings</li>
            <li>Influencers aiming to create Instagram-worthy culinary moments</li>
          </ul>

          {/* IMAGE PLACEHOLDER - Add persona or target audience visual */}
          <div className="image-placeholder">
            <span>Target Audience Persona Image</span>
          </div>

          <h2>Design Principles</h2>
          <div className="principles-grid">
            <div className="principle-card">
              <h3>Exclusivity</h3>
              <p>Every aspect—from ingredients to packaging—exudes luxury and premium quality.</p>
            </div>
            <div className="principle-card">
              <h3>Convenience</h3>
              <p>Seamless and effortless experience from ordering to delivery.</p>
            </div>
            <div className="principle-card">
              <h3>Uniqueness</h3>
              <p>A product and service that stands distinctly apart in the market.</p>
            </div>
          </div>

          <h2>User Research</h2>
          <p>
            To understand our audience deeply, we conducted qualitative research with
            18 participants through structured and semi-structured interviews. Our insights
            revealed three distinct customer archetypes:
          </p>
          <div className="user-types-grid">
            <div className="user-type-card">
              <h3>The Indulgent</h3>
              <p>Desires larger portions, premium ingredients, and delightful extras in every delivery.</p>
            </div>
            <div className="user-type-card">
              <h3>The Efficient</h3>
              <p>Prioritizes fast delivery, easy ordering, and seamless convenience in daily life.</p>
            </div>
            <div className="user-type-card">
              <h3>The Showy</h3>
              <p>Seeks a flashy, innovative experience with personalized touches in the delivery process.</p>
            </div>
          </div>

          <h2>Market Analysis</h2>
          <ul className="features-list">
            <li>Studied competitors like Svarta Lådan and BetterFeast to identify design trends and gaps</li>
            <li>Conducted user interviews and surveys to define personas and user needs</li>
            <li>Created customer journey maps and behavioral archetypes to guide UX decisions</li>
          </ul>

          <h2>Wireframing & Prototyping</h2>
          <p>
            Our design process focused on creating a premium, modern, and sleek aesthetic
            that reflects the luxury positioning of the brand.
          </p>
          <ul className="features-list">
            <li>Designed wireframes with a premium, modern aesthetic</li>
            <li>Implemented a "sticky" navbar for seamless navigation</li>
            <li>Developed an intuitive, high-converting checkout flow based on best practices</li>
          </ul>

          <img
            className="luxbite-process-img"
            src={wireframeLuxebite}
            alt="LuxeBite Wireframes"
          />

          <img
            className="luxbite-process-img"
            src={prototypeLuxebite}
            alt="LuxeBite High-Fidelity Prototype"
          />

          <h2>Team Workflow</h2>
          <p>
            We began by structuring our weeks, establishing regular meetings, and defining
            rotating roles including Scrum Master. Using Notion, Figma, Miro, and Slack,
            we streamlined our collaboration and maintained agile workflows throughout
            the project.
          </p>
          <p>
            Our initial brainstorming generated numerous ideas, which we narrowed down
            to two key concepts. After mentor consultation, we focused on the more
            luxurious meal box concept that best aligned with our vision.
          </p>

          <h2>My Role</h2>
          <p>
            As a UX/UI Designer, I contributed to the entire design process—from initial
            research and ideation through to wireframing and high-fidelity prototyping.
            I participated in user interviews, helped synthesize research findings, and
            collaborated on creating a cohesive visual identity that radiates luxury.
          </p>

          {/* IMAGE PLACEHOLDER - Add additional prototype screens */}
          <div className="image-placeholder">
            <span>Additional Prototype Screens Image</span>
          </div>

          <button className="luxbite-btn">
            <a
              href="https://www.figma.com/proto/0WcU52ESl9ufsiJr8cbURJ/VG-LuxeBite?node-id=0-1&t=yJ5YrCW6cVj5nVBw-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Prototype in Figma
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Luxbite;
