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
    <h3 className="vertical-timeline-element-title">Renault Group – Data &amp; AI Quality | Data Scientist / ML Engineer</h3>
    <p>
    • Mission 1 — RAG-Based Conversational Assistant: developed a RAG-based conversational assistant using Gemini and Vertex AI to query internal Jira knowledge bases and retrieve relevant technical information.
     <br />• Integrated LLM-powered retrieval capabilities into internal knowledge workflows using GCP, Python, and SQL.
     <br />• Mission 2 — AI-Powered Technical Incident Classification: developing AI agent workflows for automated classification of customer technical incidents across 25+ business categories, leveraging LLMs and supervised Machine Learning.
     <br />• Designing hybrid classification pipelines combining LLM-based classification, business rules, and ML models (LinearSVC, XGBoost, CatBoost), with feature engineering across 160+ features.
     <br />• Benchmarking LLM, ML, and hybrid approaches using Precision, Recall, F1-score, confusion matrices, and error analysis to improve classification reliability and support model industrialization.
     <br /><br /><strong>Skills:</strong> Python, SQL, Gemini, Vertex AI, RAG, LLMs, LinearSVC, XGBoost, CatBoost, GCP, BigQuery.
      </p>
  </VerticalTimelineElement>

<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="February 2025 - July 2025"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Renault Group | AI Software Engineer Intern – Final-Year Internship (PFE)</h3>
    <p>
    • Built and deployed a production-grade, voice-enabled AI assistant for in-car services using LangGraph, LLM APIs (OpenAI, Mistral, Llama), and multimodal pipelines integrating ASR/TTS, APIs, and retrieval systems on GCP and Azure.
     <br />• Designed agentic workflows with tool calling, conversational memory, and context-aware orchestration to support low-latency in-vehicle interactions.
     <br />• Developed an evaluation and observability framework using agents-as-judges to assess robustness, latency, hallucination rates, and user impact.
     <br />• Collaborated with product and engineering teams to transform AI prototypes into scalable production services.
     <br /><br /><strong>Skills:</strong> Python, FastAPI, LangChain, LangGraph, Gemini, Vertex AI, OpenAI, Mistral, Llama, Hugging Face, RAG, ASR/TTS, GCP, Azure, Docker, Kubernetes, CI/CD, LangSmith, Langfuse, OpenTelemetry.
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
