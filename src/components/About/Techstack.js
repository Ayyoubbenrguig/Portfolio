import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiDocker,
  DiGit,
} from "react-icons/di";
import {
  SiOpencv,
  SiTensorflow,
  SiPandas,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiFastapi,
} from "react-icons/si";

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPytorch />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiScikitlearn />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTensorflow />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNumpy />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPandas />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiOpencv />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFastapi />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiDocker />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={10} style={{ color: "white", textAlign: "left" }}>
          <p>
            <strong>Programming &amp; Data:</strong> Python, SQL, C++, Pandas
          </p>
          <p>
            <strong>Machine Learning / AI:</strong> Scikit-Learn, LinearSVC, XGBoost, CatBoost, PyTorch, TensorFlow, Transformers, NLP, Computer Vision
          </p>
          <p>
            <strong>LLM &amp; GenAI:</strong> Gemini, Vertex AI, LangChain, RAG, OpenAI API, Claude, Embeddings, Prompt Engineering
          </p>
          <p>
            <strong>Data Engineering:</strong> BigQuery, GCS, Airflow, Data Pipelines, Web Scraping
          </p>
          <p>
            <strong>Data Analytics:</strong> Looker, Looker Studio, Spotfire, Power BI
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
