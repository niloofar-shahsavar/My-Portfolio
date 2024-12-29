import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/InterAction-project.css";
import InterActionImage from "../assets/InterAction.png";

function InterAction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="interAction-page">
        <h1>InterAction</h1>
        <img
          className="interAction-img"
          src={InterActionImage}
          alt="InterAction Project"
        />
        <p>
          <a
            href="https://www.figma.com/proto/KXEFtu5amIdwGjnVmeKiyv/InterAction-Prototype?node-id=2262-610&t=K82lcjKQ3qd8qTmg-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the project in Figma
          </a>
        </p>
      </div>
      <div className="luxbite-description">
        <h2>Description</h2>
        <div className="project-section">
          <h3>Vision</h3>
          <p>
            InterAction was born from the desire to bridge the information gap
            faced by immigrant women in Sweden, creating a supportive platform
            for their integration. The app is tailored to empower users with the
            tools they need to navigate Swedish society with confidence,
            ensuring access to information, social connection, and language
            support.
          </p>
        </div>

        <div className="project-section">
          <h3>Purpose (Why)</h3>
          <p>
            InterAction aims to address the critical challenges of information
            inaccessibility, social isolation, and language barriers experienced
            by immigrant women in Sweden. By providing easy access to essential
            information, the app seeks to simplify the integration process and
            enhance community participation, ultimately fostering a sense of
            belonging and independence.
          </p>
        </div>

        <div className="project-section">
          <h3>Target Audience (Who)</h3>
          <p>
            InterAction is designed for women aged 25–50 who have been living in
            Sweden for a maximum of five years. These users often face
            difficulties adapting to Swedish society due to language and
            cultural barriers and need a centralized source of reliable
            information.
          </p>
        </div>

        <div className="project-section">
          <h3>User Experience Goals (How)</h3>
          <p>
            The app is designed around three guiding principles:
            <ol>
              <li>
                <b>Accessibility:</b> Information is presented in multiple
                languages and organized into clear, intuitive categories.
              </li>
              <li>
                <b>Engagement:</b> Social features like activity bookings and a
                feedback system encourage users to interact with the app and
                their community.
              </li>
              <li>
                <b>Clarity:</b> Minimalistic design and user-friendly navigation
                ensure users find the information they need without feeling
                overwhelmed.
              </li>
            </ol>
          </p>
        </div>

        <div className="project-section">
          <h3>User Research</h3>
          <p>
            Through qualitative interviews with nine women from the target
            demographic, we identified three primary pain points:
            <ol>
              <li>Difficulty in accessing relevant information.</li>
              <li>Feelings of social isolation.</li>
              <li>Challenges with language barriers.</li>
            </ol>
          </p>
          <p>
            This research informed the app’s focus on improving access to
            crucial information as a key solution for integration.
          </p>
        </div>

        <div className="project-section">
          <h3>Project Development and Team Workflow</h3>
          <p>
            The project team, Flowgrammers, used tools like Figma, Notion, and
            Miro to design and prototype the app. Scenario-based design
            techniques helped visualize user behavior, while agile workflows
            ensured iterative improvements based on user feedback. Roles were
            clearly defined, and priorities were set using the MoSCoW method.
          </p>
          <p>
            The app’s features include:
            <ul>
              <li>A multilingual interface.</li>
              <li>Categorized information and FAQs.</li>
              <li>Social and cultural activity bookings.</li>
              <li>Feedback and contact options for user support.</li>
            </ul>
          </p>
          <p>
            InterAction’s design emphasizes inclusivity and usability,
            supporting immigrant women in overcoming barriers to integration and
            building their confidence in navigating Swedish society.
          </p>
        </div>
      </div>{" "}
    </div>
  );
}

export default InterAction;
