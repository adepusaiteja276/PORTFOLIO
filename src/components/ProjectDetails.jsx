import React from "react";
import { useParams, Link } from "react-router-dom";
import projectData from "../data/projectData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) return <h1>Project Not Found</h1>;

  return (
    <div style={{ padding: "30px", color: "white" }}>
      <Link to="/" style={{ color: "#4fc3f7" }}>← Back</Link>

      <h1>{project.title}</h1>
      <p>{project.longDesc}</p>

      <h2>Tech Used</h2>
      <ul>
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <h2>Screenshots</h2>
      {project.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          style={{ width: "300px", margin: "10px", borderRadius: "10px" }}
        />
      ))}

      <h2>Links</h2>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        style={{ color: "skyblue" }}
      >
        GitHub Repository
      </a>
    </div>
  );
};

export default ProjectDetails;
