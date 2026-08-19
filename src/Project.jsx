import React from "react";
import "./Project.css";

const Project = () => {
  const projects = [
    {
      title: "Portfolio Website",
      tech: "React, CSS",
      desc: "A personal portfolio website with animations and responsive design.",
    },
    {
      title: "Library",
      tech: "React, Html,css",
      desc: "Displays real-time weather information using a weather API.",
    },
    {
      title: "Todo App",
      tech: "React, JavaScript",
      desc: "Manage daily tasks with add, edit, and delete features.",
    },
    {
      title: "Calculator",
      tech: "HTML, CSS, JavaScript",
      desc: "A responsive calculator with basic arithmetic operations.",
    },
    {
      title: "E-Commerce UI",
      tech: "React, Bootstrap",
      desc: "A modern shopping interface with product cards and navigation.",
    },
    {
      title: "Login Page",
      tech: "React",
      desc: "Animated login and registration form with validation.",
    },
  ];

  return (
    <section className="projects">
      <div className="container">
        <h1>
          My <span>Projects</span>
        </h1>

        <p>
          Here are some of the projects I have built using React and JavaScript.
        </p>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2>{project.title}</h2>
              <h4>{project.tech}</h4>
              <p>{project.desc}</p>

              <button>View Project</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;