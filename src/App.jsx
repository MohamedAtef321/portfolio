import React from 'react';
import './App.css';
import data from './data/portfolioData.json';

function App() {
  const { personalInfo, summary, experience, training, education, projects, skills, certifications, languages } = data;

  return (
    <div className="container">
      <header>
        <h1>{personalInfo.name}</h1>
        <h2>{personalInfo.title}</h2>
        <div className="contact-info">
          <span>{personalInfo.location}</span>
          <span>{personalInfo.phone}</span>
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={personalInfo.kaggle} target="_blank" rel="noreferrer">Kaggle</a>
        </div>
      </header>

      <section className="summary">
        <h2>Summary</h2>
        <p>{summary}</p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="job">
            <div className="job-header">
              <h3>{job.role}</h3>
              <span className="period">{job.period}</span>
            </div>
            <div className="company">
              {job.company} - {job.location}
            </div>
            <ul>
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
             <div className="project-header">
              <h3>{project.name}</h3>
              <span className="period">{project.period}</span>
            </div>
            <div className="company">{project.role}</div>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-category">
          <h3>Technical</h3>
          <div className="skills-list">
            {skills.Technical.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h3>General</h3>
          <div className="skills-list">
            {skills.General.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <span className="period">{edu.period}</span>
            <p>{edu.grade}</p>
          </div>
        ))}
      </section>
      
       <section className="training">
        <h2>Training</h2>
        {training.map((train, index) => (
          <div key={index} className="job">
            <div className="job-header">
              <h3>{train.role}</h3>
              <span className="period">{train.period}</span>
            </div>
            <div className="company">
              {train.company} - {train.location}
            </div>
            <ul>
              {train.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>

       <section className="languages">
        <h2>Languages</h2>
        <ul>
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
