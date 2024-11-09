import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import gp from "../../Assets/Certification/gp.jpg";
import ibm from "../../Assets/Certification/ibm.jpg";
import sm from "../../Assets/Certification/sm.jpg";
import Ri from "../../Assets/Certification/Ri.jpg";
import DL from "../../Assets/Certification/DL.jpg";
import sql from "../../Assets/Certification/sql.jpg";
import uml from "../../Assets/Certification/uml.jpg";
import cn from "../../Assets/Certification/cn.jpg";
import DL_R from "../../Assets/Certification/DL_R.jpg";




function Certification() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          In this section you'll find certifications of courses and specializations that I enrolled.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sm}
              isBlog={false}
              title="Scrum Master Certification"
              description={
                <>
              In this specialization, I learned about managing tasks and events
              within a Sprint, Scrum terminology and roles, Scrum reporting,
              managing risks, Story Points and User Stories, scaling
              Scrum, Continuous Integration, test-Driven Development (TDD), and
              Behavior Driven Development (BDD).
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
                </>
              }
              courseraLink="https://coursera.org/share/49dc3ef0ab34f16eac5891d0050ddcf2"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibm}
              isBlog={false}
              title="IBM Data Science"
              description=" 
              In this 10 courses Professional Certificate, I developed and honed hands-on 
              skills in Data Science and Machine Learning. I started with
              an orientation of Data Science and its Methodology, became familiar
              and used a variety of data science tools, learned Python and SQL,
              performed Data Visualization and Analysis, and created Machine
              Learning models. In the process I completed several labs and
              assignments on the cloud including a Capstone Project at the end to
              apply and demonstrate my knowledge and skills.
              "
              courseraLink="https://coursera.org/share/707f69773f0754a1f38f196f38ff791b"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gp}
              isBlog={false}
              title="Google Project Management"
              description={
                <>
              In this Certificate, I have
              completed six courses, developed by Google, that include hands-on,
              practice-based assessments and are designed to prepare them for
              introductory-level roles in Project Management. They are competent in
              initiating, planning and running both traditional and agile projects.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
                </>
              }
              courseraLink="https://coursera.org/verify/professional-cert/E2TFH4L2ZWLN"
              />
          </Col>    
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ri}
              isBlog={false}
              title="Les bits et les octets des réseaux informatiques"
              description={
                <>
              This course provided a strong foundation in computer networking concepts, covering topics like network 
              protocols, IP addressing, and data transmission. Through hands-on practice with Cisco Packet Tracer, 
              I developed practical skills in configuring and troubleshooting network setups, preparing me to work on 
              real-world networking projects.
              <br />
              <br />
              <br />
                </>
              }
              courseraLink="https://coursera.org/share/4002ae45d6554edd754d432f5cf15131"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cn}
              isBlog={false}
              title="Client Needs and Software Requirements"
              description="
              In this course, I learned create clear requirements to drive effective software development,
              how to visualize client needs using low-fidelity prototypes, how to maximize the effectiveness 
              of client interactions and how to adapt to changing product requirements
              "
              courseraLink="https://coursera.org/share/76e027ed18e2156f1667206730f494e4"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DL}
              isBlog={false}
              title="Neural Networks and Deep Learning"
              description="
              This course offred by DeepLearning.AI on Coursera, is an introductory program focused on neural networks 
              and deep learning. It covers fundamental AI concepts, including the structure of neural networks, training 
              deep learning models, and applying these models to real-world problems. Taught by Andrew Ng and his team, 
              this course aims to provide learners with a solid understanding of deep learning fundamentals, 
              along with practical tools to build and test their own neural networks.
              "
              courseraLink="https://coursera.org/share/5acabee8593dbfa9eca39c944cd8d819"
              />
          </Col>
          


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DL_R}
              isBlog={false}
              title="Improving Deep Neural Networks: Hyperparameter Tuning, Regularization, and Optimization"
              description={
                <>
              This course, part of the deep learning specialization, focuses on techniques to enhance deep neural network
              performance, covering topics like hyperparameter tuning, regularization methods, and optimization strategies. 
              Taught by Andrew Ng and his team, the course aims to equip learners with advanced skills to fine-tune and optimize 
              neural networks effectively.
              <br />
              <br />
                </>
              }
              courseraLink="https://coursera.org/share/44db3e1396970a4c341698fcd20ef6a6"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uml}
              isBlog={false}
              title="Modeling Software Systems using UML"
              description={
                <>
              In this course, I learned how to create UML diagrams to model software systems.
                </>
              }
              courseraLink="https://coursera.org/share/885a0a0c5613c0bd4628513435fa2b39"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="SoloLearn SQL"
              description={
                <> 
              In this specialization, I learned how to create and manipulate databases using SQL.
              <br />
              <br />
              <br />
                </>
              }
              courseraLink="https://coursera.org/share/d7e7201f03f2241e1d27b2f085bb80a7"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certification;
