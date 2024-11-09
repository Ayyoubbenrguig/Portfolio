import React from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';
import { IoMdSchool } from "react-icons/io";



function Education() {
  return (
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2024 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Ensimag | Artificial Intelligence</h3>
    <h4 className="vertical-timeline-element-subtitle">Grenoble, France</h4>
    <p>
      Master's degree in Artificial Intelligence.
      <br /><strong>Included courses</strong>  : Machine Learning, Deep Learning, Reinforcement Learning, Computer Vision, Natural Language Processing, Data Mining, Probabilistic Graphical Models, etc.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Ecole Centrale Casablanca | Systems Engineering </h3>
    <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
    <p>
    Engineer's degree in General Engineering with a focus on Data Science.
    <br /><strong>Included courses</strong>  : Probability, Statistics, Optimization, Algorithms, Data Structures, Object-Oriented Programming, Operations Research. etc.
    <br />
    <strong>Grade</strong> : Ranked 17 out of 180 students.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title"> CPGE Centre Errazi | Maths-Physics (MP) </h3>
    <h4 className="vertical-timeline-element-subtitle">ELJadida, Morocco</h4>
    <p>
    2 years of intensive training in mathematics, physics, computer science and systems engineering to pass the national exam for high engineerig schools (Grandes Ecoles).
    <br /> <strong>Grade</strong> : Ranked 48 out of 1200 students (Top 4% of national cohort).
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2019 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title"> Lycée Imam EL Ghazali | Baccalaureate Diploma  </h3>
    <h4 className="vertical-timeline-element-subtitle">Essaouira, Morocco</h4>
    <p>
    High School Diploma (Scientific Track) with a focus on Mathematics (Sciences Math A).
    <br /> <strong>Grade</strong> : Graduated With Highest Honors (Très Bien).
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  );
}

export default Education;
