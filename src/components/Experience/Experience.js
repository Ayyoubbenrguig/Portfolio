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
    <h3 className="vertical-timeline-element-title">Renault Group – Quality Department (Incidentology) | Data & Tools Engineer – Apprenticeship</h3>
    <p>
    • Working in a transversal squad supporting incidentology teams.
     <br />• Developing AI/ML methods, building operational dashboards, and automating incident data workflows to improve analysis and decision-making.
     <br /><br /><strong>Skills:</strong> NLP, ML, Data Engineering, Dashboarding, Business Collaboration.
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
    <h3 className="vertical-timeline-element-title">Renault Group – Futurama (Innovation) | Data Scientist & AI Engineer Intern</h3>
    <p>
    • Developed an end-to-end RAG-based chatbot on Google Cloud (Vertex AI).
     <br />• Built interactive dashboards, created a multi-source data lake (GCS & BigQuery), and designed an automated data pipeline for vehicle fleet datasets.
     <br /><br /><strong>Skills:</strong> GCP, Vertex AI, LLMs, NLP, Data Engineering, Dashboards.
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
    <h3 className="vertical-timeline-element-title">Tecpap | Data Science & AI Consultant</h3>
    <p>
    • Developed a computer vision-based anomaly detection system for identifying printing errors on kraft paper bags using deep learning models like CNN, ResNet, and VGG16.
    <br />• Focused on automating quality control by implementing real-time image classification to distinguish compliant from non-compliant products.
    See all the report here: <a href="https://github.com/Ayyoubbenrguig/Automatisation-de-la-d-tection-d-erreurs-d-impression-">Project Link</a>
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
    <h3 className="vertical-timeline-element-title">Groupe OCP | Data Scientist</h3>
    <p>
    • Contributed to a preventive maintenance project by collecting and analyzing equipment data to develop a maintenance plan.
    <br />• Focused on optimizing equipment performance and ensuring operational continuity, utilizing data storage, cloud solutions, and industrial monitoring techniques.
    </p>
  </VerticalTimelineElement>

  
</VerticalTimeline>
  );
}

export default Experience;
