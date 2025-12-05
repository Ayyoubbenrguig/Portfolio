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
    date="November 2023 - March 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Meriskill | Data Analyst</h3>
    <p>
    • Focused on data analysis and visualization using Power BI to preprocess, visualize, and analyze data for insightful reporting.
    <br />• Involved data cleaning and transformation and creating interactive dashboards, leveraging Power BI and SQL for efficient data management and analysis.
    <br />
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="July 2023 - September 2023"
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
