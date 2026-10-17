import React from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';
import { IoMdBriefcase } from "react-icons/io";

function Experience() {
  return (
    <VerticalTimeline>

<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Since September 2025"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Renault Group – Quality Department (Incidentology) | Data Scientist / ML Engineer – Data &amp; AI Quality</h3>
    <p>
    • Developing AI/ML solutions to automate the classification of technical incidents on Multimedia &amp; Connected Services.
     <br />• Designing Gemini / Vertex AI systems covering 25+ business categories on multilingual and noisy data, with prompting, disambiguation rules and few-shot learning.
     <br />• Developing LinearSVC, XGBoost and CatBoost models, with feature engineering, analysis of 160+ variables and LLM vs ML benchmarking.
     <br />• Designing and shipping Looker dashboards for quality indicators, customer complaints and ADAS &amp; ADAM scopes, in the Squad Data &amp; Tools.
     <br /><br /><strong>Skills:</strong> Python, SQL, Gemini, Vertex AI, LinearSVC, XGBoost, CatBoost, Looker, NLP, Data Engineering.
      </p>
  </VerticalTimelineElement>

<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="February 2025 - August 2025"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Renault Group – Futurama (Innovation) | Data Scientist – Final Year Project</h3>
    <p>
    • Developed an end-to-end RAG-based conversational assistant on Google Cloud (Vertex AI, Gemini) to query internal knowledge bases.
     <br />• Designed automated data pipelines on BigQuery and GCS for multi-source mobility datasets.
     <br />• Built interactive dashboards (Looker Studio / Spotfire) and automated data processing.
     <br /><br /><strong>Skills:</strong> GCP, Vertex AI, Gemini, RAG, LLMs, NLP, Data Engineering, Dashboards.
      </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="April 2024 - August 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">INTELCIA | AI Engineer Intern</h3>
    <p>
    • Designed and deployed RAG-based chatbots for major clients, improving answer accuracy to 92% using advanced techniques (Semantic Chunking, History-Aware Retriever, Multi-Query Retriever, Query Decomposition).
    <br />• Built functional demos and collaborated with cross-functional teams to align chatbot behavior with business needs.
    <br /><br /><strong>Skills:</strong> LLMs, LangChain, Azure, OpenAI, Claude, Embeddings, Streamlit, LangSmith.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="June 2023 - August 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Tecpap | Computer Vision Intern</h3>
    <p>
    • Developed CNN / GAN models for real-time industrial defect detection on printing lines.
    <br />• Built Computer Vision pipelines with OpenCV, PyTorch and TensorFlow, containerized with Docker and orchestrated with Kubernetes.
    <br />• Reduced manual inspection effort and improved defect detection accuracy.
    <br /><br /><strong>Skills:</strong> CNN, GAN, OpenCV, PyTorch, TensorFlow, Docker, Kubernetes, Computer Vision.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="July 2022 - August 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Groupe OCP | Data Science Intern</h3>
    <p>
    • Contributed to a predictive maintenance project by collecting and analyzing equipment data to develop a maintenance plan.
    <br />• Automated data collection and cleaning with web scraping scripts (BeautifulSoup, Scrapy) and structured databases in MySQL.
    <br />• Developed Machine Learning models (SVM, logistic regression, decision trees) to anticipate failures and optimize interventions.
    <br /><br /><strong>Skills:</strong> Python, SQL, MySQL, BeautifulSoup, Scrapy, SVM, Logistic Regression, Decision Trees.
    </p>
  </VerticalTimelineElement>

  
</VerticalTimeline>
  );
}

export default Experience;
