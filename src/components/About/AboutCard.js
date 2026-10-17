import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Ayyoub Benrguig</span>, an AI &amp; Data Science Engineer based in Paris, France.
            <br />
            <br />Since September 2025, I work at <span className="purple">Renault Group</span> as Data Scientist / ML Engineer in the Data &amp; AI Quality team (Squad Data &amp; Tools). I build AI/ML solutions to automate the classification of technical incidents on Multimedia &amp; Connected Services, using Gemini / Vertex AI, LinearSVC, XGBoost and CatBoost, and Looker dashboards for quality indicators.
            <br />
            <br />I previously graduated as a Data Science Engineer from <span className="purple">École Centrale Casablanca</span>, where I built a strong foundation in applied mathematics, general engineering, and artificial intelligence. At Ensimag, Grenoble INP, I further strengthened these skills through advanced courses in Deep Learning, Reinforcement Learning, Computer Vision, and Natural Language Processing.
            <br />
            <br />My expertise covers <span className="purple">LLMs &amp; RAG</span> (chatbots, voicebots), <span className="purple">Computer Vision</span> (defect detection, image segmentation), <span className="purple">Machine Learning</span> (classification, predictive modelling), and <span className="purple">Data Engineering &amp; Analytics</span> (GCP, BigQuery, pipelines, Looker).
            <br />
            <br />This portfolio showcases my work:
            <br />• AI-driven applications and prototypes
            <br />• End-to-end data pipelines
            <br />• Industry projects in innovation and data engineering
            <br />• Certifications, skills, and the challenges I've tackled
            <br />
            <br />Feel free to explore, and don't hesitate to reach out if you'd like to discuss AI, data, or potential collaborations.
          </p>

          <p style={{ color: "rgb(96, 136, 224)" }}>
            "The only way to do great work is to love what you do."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
