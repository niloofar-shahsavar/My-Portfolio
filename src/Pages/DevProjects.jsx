// src/pages/DevProjects.jsx
import SEO from "../components/SEO";

function DevProjects() {
  return (
    <div className="dev-projects-page">
      <SEO
        title="Development Projects"
        description="Development projects by Niloofar Shahsavar — Survii AI survey app, personal blog platform, and e-commerce webshop built with React and FastAPI."
        path="/dev-project"
      />
      <h1>Development Projects</h1>
      <div className="projects-grid">
        <ProjectCard 
          title="Blog"
          link="/blog"
          description="..."
        />
        <ProjectCard 
          title="Random Stuff"
          link="/randomStuff"
          description="..."
        />
        <ProjectCard 
          title="Project 3"
          link="/project3"
          description="..."
        />
      </div>
    </div>
  );
}

export default DevProjects;