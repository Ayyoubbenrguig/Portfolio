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
    date="Since February 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Renault | Data Scientist – Mobility & CO₂ Forecasting</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Guyancourt, France</h4> */}
    <p>
    .•Developed data-driven models to analyze mobility patterns and CO₂ emissions, leveraging machine learning techniques such as classification and multivariate analysis.
     <br />• Designed and implemented data fusion methods to integrate heterogeneous datasets from various sources (INSEE, CEREMA, SDES, Renault telemetry) for predictive studies.
     <br />• Simulated decarbonization scenarios by applying AI-based forecasting models to assess the impact of innovations on emissions reduction.
     <br />• Built automated reporting pipelines using SQL and Google Cloud Platform (GCP), enabling real-time updates and visualization via Looker Studio and Spotfire.
     <br />• Conducted research on sustainable mobility trends, regulatory impacts, and technological advancements to support strategic decision-making.
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
    {/* <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4> */}
    <p>
    • Developed a computer vision-based anomaly detection system for identifying printing errors on kraft paper bags using deep learning models like CNN, ResNet, and VGG16.
    <br />• focused on automating quality control by implementing real-time image classification to  distinguish compliant from non-compliant products.
    See all the report here :<a href="https://github.com/Ayyoubbenrguig/Automatisation-de-la-d-tection-d-erreurs-d-impression-">Project Link</a>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="October 2023 - August 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Junior Entreprise JECC | Business Analyst</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4> */}
    <p>
    • Worked as a Junior consultant, where I managed and spearheaded projects for several companies such as TRIA Company, for which
    I conducted a comprehensive assessment of Moroccan pasta market and competitor analyses across various
    locations in Morocco (including Rabat, Casablanca, Tangier, Agadir, Tetouan, etc.), designing impactful questionnaires and creating
    visually intuitive dashboards to guide strategic decision-making for the launch of a new pasta range, ultimately
    providing valuable insights that significantly contributed to our client's decision process aiding strategic decision-making.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="November 2023 - Mars 2024 "
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title"> Meriskill | Data analyst </h3>
    <p>
    • Focused on data analysis and visualization using Power BI to preprocess, visualize, and analyze data for insightful reporting
    detection and crisis prediction, achieving 95% sensitivity and 92% specificity.
    <br />•  Involved data cleaning and transformation and creating interactive dashboards, leveraging Power BI and SQL for efficient data management and analysis.
    decision-making and personalized care.
    <br />
    </p>
  </VerticalTimelineElement>





  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Juillet 2023 - September 2023 "
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title"> Groupe OCP |  </h3>
    {/* <h4 className="vertical-timeline-element-subtitle">EL Jadida, Morocco</h4> */}
    <p>
    • contributed to a preventive maintenance project by collecting and analyzing equipment data to develop a maintenance plan
    </p>•Focused on optimizing equipment performance and ensuring operational continuity, utilizing data storage, cloud solutions, and industrial monitoring techniques.
  </VerticalTimelineElement>

  
</VerticalTimeline>
  );
}

export default Experience;
