import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an <i><b className="purple">AI &amp; Data Science Engineer</b></i> working at <i><b className="purple">Renault Group</b></i> on AI/ML solutions for automotive data.
              <br />
              <br />My work focuses on <i><b className="purple">incident classification</b></i>, <i><b className="purple">LLM / GenAI</b></i> systems (Gemini / Vertex AI, RAG, LangChain), and <i><b className="purple">data analytics</b></i> with Python, SQL, BigQuery and Looker dashboards.
              <br />
              <br />Previously, I graduated as a Data Science Engineer from <i><b className="purple">École Centrale Casablanca</b></i>, and I studied Artificial Intelligence at <i><b className="purple">Ensimag, Grenoble INP</b></i>.
              <br />
              <br />I build reliable, scalable AI solutions — from RAG chatbots and computer vision systems to production data pipelines — and I care about measurable impact for business teams.
            </p>
          </Col>
          <Col md={4} className="myAvtar d-flex align-items-center">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ maxHeight: "300px" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ayyoubbenrguig"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayyoub-benrguig"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ayoub_benrguig/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ayyoubbenrguig@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
            <p>Paris, France</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
