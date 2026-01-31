import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using modern technologies.',
      achievements: [
        'Architected and implemented microservices reducing system latency by 40%',
        'Mentored junior developers and established coding standards',
        'Integrated CI/CD pipelines improving deployment efficiency by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained full-stack applications for enterprise clients.',
      achievements: [
        'Built responsive web applications serving 100k+ users',
        'Optimized database queries improving performance by 50%',
        'Collaborated with cross-functional teams in agile environment'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'WebCraft Agency',
      period: '2018 - 2020',
      description: 'Created engaging user interfaces and interactive web experiences.',
      achievements: [
        'Developed pixel-perfect responsive designs',
        'Implemented state management solutions for complex applications',
        'Reduced bundle size by 30% through code optimization'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-company">{exp.company}</span>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
