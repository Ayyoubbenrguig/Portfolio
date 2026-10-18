import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGooglecolab,
  SiVisualstudiocode,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiAnaconda,
  SiJupyter,
  SiMicrosoftazure,
  SiApachekafka,
} from "react-icons/si";

function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiGooglecolab />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGitlab />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAnaconda />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMicrosoftazure />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiApachekafka />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJupyter />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={10} style={{ color: "white", textAlign: "left" }}>
          <p>
            <strong>Cloud &amp; Data Platforms:</strong> GCP, Vertex AI, BigQuery, GCS, Azure, Airflow, Kafka
          </p>
          <p>
            <strong>BI &amp; Dashboards:</strong> Looker, Looker Studio, Spotfire, Power BI
          </p>
          <p>
            <strong>LLM &amp; AI Tools:</strong> Gemini, OpenAI, Claude, LangChain, LangSmith, Langfuse, OpenTelemetry
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;
