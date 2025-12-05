import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Ayyoub Benrguig</span>, a Data Science and AI engineer currently completing my studies at <span className="purple">Ensimag, Grenoble INP</span>.
            <br />
            <br />I previously graduated as a Data Science Engineer from <span className="purple">École Centrale Casablanca</span>, where I built a strong foundation in applied mathematics, general engineering, and artificial intelligence. These three years shaped my analytical mindset and sparked my deep interest in machine learning and intelligent systems.
            <br />
            <br />My journey has since evolved toward <span className="purple">Artificial Intelligence</span>, <span className="purple">LLMs</span>, <span className="purple">NLP</span>, and <span className="purple">Data Engineering</span>. At Ensimag, I further strengthened these skills through advanced courses in Deep Learning, Reinforcement Learning, Computer Vision, and Natural Language Processing.
            <br />
            <br />Professionally, I've worked on impactful projects—from <span className="purple">RAG-based chatbot architectures</span> to <span className="purple">computer vision systems</span> and <span className="purple">data pipelines</span> in production environments. These experiences allowed me to blend engineering rigor with AI innovation and reinforced my passion for building reliable, scalable, and meaningful AI solutions.
            <br />
            <br />This portfolio showcases my work:
            <br />• AI-driven applications and prototypes
            <br />• End-to-end data pipelines
            <br />• Industry internships in innovation and data engineering
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
