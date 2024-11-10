import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import tecpap from "../../Assets/Projects/Tecpap.jpg";
import netflix from "../../Assets/Projects/netflix.png";
import Segment from "../../Assets/Projects/Segmentation_poumons.png";
import maintenance from "../../Assets/Projects/maintenance_preventive.jpg";
import banque from "../../Assets/Projects/banque.png";
import sales from "../../Assets/Projects/sales.png";
import graph from "../../Assets/Projects/graph.png";
import ibm from "../../Assets/Projects/ibm.png";
import robotics from "../../Assets/Projects/robotics.png";
import snake from "../../Assets/Projects/snake.jpg";
import plbd from "../../Assets/Projects/plbd_10.jpg";
import Ibm_data from "../../Assets/Projects/Ibm_data.png";
import DL from "../../Assets/Projects/deep_learning.jpg";
import kaggle from "../../Assets/Projects/kaggle.png";




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
              imgPath={tecpap}
              isBlog={false}
              title=" Automatisation de la detection d'erreurs_d'impression"
              description="Mettre en place un système de détection d'anomalies automatisé basé sur la vision par ordinateur pour identifier et classer les produits en sacs conformes et non conformes, réduisant ainsi la nécessité d'une intervention humaine constante."
              ghLink="https://github.com/Ayyoubbenrguig/Automatisation_de_la_detection_des-erreurs_d-impression"
              />
          </Col>
              

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ netflix}
              isBlog={false}
              title="Movie recommendation system"
              description="This repository is implementation about Matrix Factorization Techniques for Recommender Systems"
              ghLink="https://github.com/Ayyoubbenrguig/Movie_recommendation_system"
              />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Segment}
              isBlog={false}
              title="Segmentation d'images Medicales"
              description="This project combines Swin U-Net and GANs to improve the segmentation of organs and tissues in medical images while generating synthetic data to balance the dataset."
              ghLink="https://github.com/Ayyoubbenrguig/Segmentation_d-Images_M-dicales_avec_Swin_U-Net_et_Augmentation_par_GAN"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maintenance}
              isBlog={false}
              title="Milling Machine Predictive Maintenance Project"
              description=" This project addresses the implementation of artificial intelligence for predictive maintenance, focusing on milling machines."
              ghLink="https://github.com/Ayyoubbenrguig/Milling_Machine_Predictive_Maintenance-"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibm}
              isBlog={false}
              title="IBM - SpaceX Falcon9 Landing Prediction"
              description="In this project, I worked on different Data Science stages in order to predict if the SpaceX Falcon 9 first stage will land successfully. By predicting if the first stage will land, we can determine the cost of a launch. This information can be used if an alternate company wants to bid against SpaceX for a rocket launch."  
              ghLink="https://github.com/Ayyoubbenrguig/SpaceX_Falcon9_first_stage_Landing_Prediction"
              />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={banque}
              isBlog={false}
              title="RECEIVE_A_LOAN_FROM_THE_BANK"
              description="As part of our MLOps Project, we monitored the functioning of the server and CPU of the local machine using Grafana and prometheus."
              demoLink="https://github.com/Ayyoubbenrguig/RECEIVE_A_LOAN_FROM_THE_BANK"
              />
          </Col>
              

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="Sales Analysis Meriskill"
              description="In this project, we delve deep into sales data, creating insightful dashboards and providing strategic recommendations to enhance decision-making, ultimately offering a data-driven approach for optimizing business strategies. The project involved data cleaning, exploratory data analysis, and visualization to identify key trends and patterns in the sales data, enabling us to provide actionable insights that drive business growth. PowerBI was used to create interactive dashboards that visualize sales performance, product trends, and customer behavior, allowing stakeholders to make informed decisions based on data-driven analysis."
              ghLink="https://github.com/Ayyoubbenrguig/Sales_Analysis_Meriskill"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plbd}
              isBlog={false}
              title="Learning by Doing : Casa zero Waste"
              description="The Learning by Doing Project Learning By Doing is an annual project (10 months) that encourages teamwork and leadership development among a team of five members with diverse nationalities. In this project, we concepted a smart bin psystem  nammed Casa zero waste, it is crucial for the future, as efficient waste management has become a major concern. By integrating ultrasonic sensors, a microcontroller, and a web platform, this revolutionary system enables optimized waste collection, thereby reducing unnecessary trips, costs, and greenhouse gas emissions. Additionally, the mobile app empowers citizens by allowing them to plan waste disposal, avoiding overflowing bins."  
            
              ghLink="https://github.com/Ayyoubbenrguig/Casa_Zero_Waste"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="In this project, I developed a snake game utilizing Object-Oriented Programming in Python with a Test Driven Development approach and PyGlet library. The game features a snake that grows in size as it eats food, with the objective of avoiding collisions with the walls and itself. The game includes a scoring system that tracks the player's progress and a game over screen that displays the final score. The game was developed to improve my programming skills and showcase my ability to develop interactive applications."  
              ghLink="https://github.com/Ayyoubbenrguig/Snake"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graph}
              isBlog={false}
              title="Graph Theory Project : Social Networks Analysis"
              description="This project explores the analysis of social networks using key graph theory concepts such as Edge Centrality, Betweenness Centrality, and Closeness Centrality. By examining various types of networks, the project highlights the influence and importance of nodes within these interconnected systems."  
              ghLink="https://github.com/Ayyoubbenrguig/RESEAUX_SOCIAUX_-_GRAPHES"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robotics}
              isBlog={false}
              title="Robotics Project : Waste Collecting Robot"
              description="In this project, we designed and built a waste-collecting line-following robot. We assembled the basic robot, delved into programming principles, and achieved objectives like line following, intersection handling, PID controller implementation, and integrating a robotic arm for efficient collection."  
              demoLink="https://drive.google.com/file/d/1EEjogU9YaWkJHDMXCsbKlCgzVInnW8Wn/view"
              ghLink="https://github.com/Ayyoubbenrguig/Projet_robotique"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ibm_data}
              isBlog={false}
              title="Coursera Projects: IBM Data scientist"
              description="This repository contains a collection of data science projects completed as part of the IBM Data Science Professional Certificate on Coursera. These projects cover various stages of the data science process, from data exploration to machine learning modeling, showcasing a comprehensive set of skills acquired throughout the course."  
              
              ghLink="https://github.com/Ayyoubbenrguig/IBM_Data_Science_Projects"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DL}
              isBlog={false}
              title="Deep learning projects: DeepLearning.AI"
              description="This repository contains projects completed as part of the Deep Learning Specialization on Coursera, presented by DeepLearning.AI. Each project covers a crucial aspect of deep learning, providing hands-on experience with neural networks, convolutional networks, recurrent neural networks, and more. "  
              
              ghLink="https://github.com/Ayyoubbenrguig/Deep_Learning_Projects"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kaggle}
              isBlog={false}
              title="Data Science and Machine Learning Projects"
              description="This repository contains a collection of data science, machine learning, and deep learning projects inspired by Kaggle datasets. These projects serve as a showcase of my skills in data analysis, predictive modeling, and working with frameworks like TensorFlow for deep learning tasks. Each project addresses a unique problem, from medical data analysis to classic prediction challenges."  
              
              ghLink="https://github.com/Ayyoubbenrguig/Kaggle_Project"
              />
          </Col>                     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
