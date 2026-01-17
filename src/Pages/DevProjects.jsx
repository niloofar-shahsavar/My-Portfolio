// src/pages/DevProjects.jsx
function DevProjects() {
  return (
    <div className="dev-projects-page">
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