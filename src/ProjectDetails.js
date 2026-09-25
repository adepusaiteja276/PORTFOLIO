import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const projectInfo = {
  "Smart Blood Compatibility System": {
    details:
      "This project uses Machine Learning + rule-based logic to match donors with patients safely.",
    link: "https://your-live-link.com", // change for real link
  },
  "Epileptic Seizure Prediction": {
    details:
      "Deep learning model to predict seizures early from EEG signals.",
    link: "https://your-live-link.com",
  },
  "Cuisine Classification": {
    details:
      "ML model that classifies cuisine based on ingredients.",
    link: "https://your-live-link.com",
  },
  "Restaurant Rating Prediction": {
    details:
      "Predicts restaurant ratings using price, reviews & service quality.",
    link: "https://your-live-link.com",
  },
};

export default function ProjectDetails() {
  const { title } = useParams();
  const navigate = useNavigate();
  const project = projectInfo[title];

  return (
    <div style={{ padding: 30, color: "white" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>
        ⬅ Back
      </button>

      <h1>{title}</h1>
      <p style={{ marginTop: 15 }}>{project.details}</p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={{ marginTop: 20 }}>Open Project 🔗</button>
      </a>
    </div>
  );
}
