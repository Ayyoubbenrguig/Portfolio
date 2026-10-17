import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Segment from "../../Assets/Projects/Segmentation_poumons.png";
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
              imgPath={banque}
              isBlog={false}
              title="Intelligent Document Parsing Pipeline"
              description="Automated extraction of financial data with OCR and LLMs (2024). Pipeline combining OCR, LLM, Azure OpenAI, Vertex AI and Python to extract structured data from complex PDF tables and generate formatted Excel reports."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DL}
              isBlog={false}
              title="Voicebot Development"
              description="Voicebot with RAG, LangChain, OpenAI Whisper and Streamlit (Oct 2023 - Mar 2024). Conversational voicebot combining speech-to-text, retrieval-augmented generation and text-to-speech to answer client inquiries."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Segment}
              isBlog={false}
              title="Segmentation d'images Medicales avec Swin U-Net"
              description="Transformer-based medical image segmentation model (2023). Swin U-Net model built with PyTorch, with GAN-based data augmentation to enrich the training dataset for medical and industrial images."
              ghLink="https://github.com/Ayyoubbenrguig/Segmentation_d-Images_M-dicales_avec_Swin_U-Net_et_Augmentation_par_GAN"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
