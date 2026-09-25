import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/project/${project.id}`}
      style={{
        textDecoration: "none",
        color: "white",
        background: "rgba(255,255,255,0.1)",
        padding: "15px",
        borderRadius: "10px",
        display: "block",
        width: "250px",
        margin: "10px"
      }}
    >
      <img
        src={project.images[0]}
        alt=""
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{project.title}</h3>
      <p>{project.shortDesc}</p>
    </Link>
  );
};

export default ProjectCard;
