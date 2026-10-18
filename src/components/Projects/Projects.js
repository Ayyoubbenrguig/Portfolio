import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import MLOps from "../../Assets/Projects/MLOps.png";
import internet from "../../Assets/Projects/internet.jpg";
import banque from "../../Assets/Projects/banque.png";
import DL from "../../Assets/Projects/deep_learning.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          In this section you'll find some of the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DL}
              isBlog={false}
              title="Voice-Enabled AI Assistant for In-Car Services"
              description="Production-grade voice-enabled AI assistant for in-car services (Renault, 2025). Built with LangGraph, LLM APIs (OpenAI, Mistral, Llama) and multimodal pipelines combining ASR/TTS, APIs and retrieval systems on GCP and Azure. Designed agentic workflows with tool calling, conversational memory and context-aware orchestration for low-latency in-vehicle interactions, plus an agents-as-judges evaluation framework tracking robustness, latency, hallucination rates and user impact."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MLOps}
              isBlog={false}
              title="AI Agent Workflows for Incident Classification"
              description="AI agent workflows automating the classification of customer technical incidents across 25+ business categories (Renault, 2025). Hybrid pipelines combining LLM-based classification, business rules and ML models (LinearSVC, XGBoost, CatBoost) with feature engineering on 160+ features. LLM, ML and hybrid approaches benchmarked with Precision, Recall, F1-score, confusion matrices and error analysis to support model industrialization."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={internet}
              isBlog={false}
              title="RAG-Based Conversational Assistant"
              description="RAG-based conversational assistant querying internal Jira knowledge bases (Renault, 2025). Built with Gemini and Vertex AI to retrieve relevant technical information in natural language, with LLM-powered retrieval integrated into internal knowledge workflows on GCP (Python, SQL, BigQuery)."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={banque}
              isBlog={false}
              title="Intelligent Document Parsing Pipeline"
              description="Automated extraction of financial data with OCR and LLMs (2024). Pipeline combining OCR, LLM, Azure OpenAI, Vertex AI and Python to extract structured data from complex PDF tables and generate formatted Excel reports."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
