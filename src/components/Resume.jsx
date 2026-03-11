import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Code, Heart, Monitor, Award } from 'lucide-react';
import './Resume.css';

const Resume = () => {
    const skills = [
        { name: 'React / Next.js', level: 90 },
        { name: 'Node.js', level: 55 },
        { name: 'TypeScript', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'AWS / Cloud', level: 40 },
        { name: 'Git', level: 65 },
        { name: 'PHP', level: 85 },
        { name: 'Laravel', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Bootstrap', level: 75 },
        { name: 'Tailwind CSS', level: 70 },
    ];

    const experience = [
        {
            year: '2026 - Present',
            company: 'Russolutions Consult',
            role: 'Lead Software Engineer( Intern )',
            desc: 'Leading a team of 3 developers in building scalable Web-app solutions.'
        },

    ];

    return (
        <section id="resume" className="resume section-padding bg-secondary">
            <div className="container">
                <h3 className="section-subtitle">My Path</h3>
                <h2 className="section-title">Resume & <span className="text-accent">Skills</span></h2>

                <div className="resume-grid">
                    {/* Left Column: Skills */}
                    <div className="resume-col">
                        <div className="resume-section">
                            <h4 className="flex-title"><Code size={20} className="text-accent" /> Software Skills</h4>
                            <div className="skills-list">
                                {skills.map((skill) => (
                                    <div key={skill.name} className="skill-item">
                                        <div className="skill-info">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: 'easeOut' }}
                                                className="skill-progress"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="resume-section">
                            <h4 className="flex-title"><BookOpen size={20} className="text-accent" /> Education</h4>
                            <div className="education-item">
                                <h5>BS in Computer Science</h5>
                                <p>University of Greenwich 2024 - 2026</p>
                                <h5>A-Levels</h5>
                                <p>East Airport International School 2020 - 2022</p>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Experience */}
                    <div className="resume-col">
                        <h4 className="flex-title"><Briefcase size={20} className="text-accent" /> Experience</h4>
                        <div className="timeline">
                            {experience.map((exp, idx) => (
                                <div key={idx} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-year">{exp.year}</div>
                                    <div className="timeline-content">
                                        <h5>{exp.company}</h5>
                                        <p className="role">{exp.role}</p>
                                        <p className="desc">{exp.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Other Info */}
                    <div className="resume-col">
                        <div className="resume-section">
                            <h4 className="flex-title"><Monitor size={20} className="text-accent" /> What Can I Do?</h4>
                            <ul className="info-list">
                                <li>System Architecture</li>
                                <li>API Design & Development</li>
                                <li>Web App Development</li>
                                <li>UI Automation</li>
                                <li>Database Design</li>
                                <li>Cloud Computing</li>

                            </ul>
                        </div>

                        <div className="resume-section">
                            <h4 className="flex-title"><Heart size={20} className="text-accent" /> Hobbies</h4>
                            <div className="hobbies-grid">
                                <div className="hobby-item">Coding</div>
                                <div className="hobby-item">Photography</div>
                                <div className="hobby-item">Forex Trading</div>
                                <div className="hobby-item">Gym</div>
                            </div>
                        </div>

                        <div className="resume-section">
                            <h4 className="flex-title"><Award size={20} className="text-accent" /> Certifications</h4>
                            <ul className="info-list">
                                <li>CSD Certification | Ghana-India Kofi Annan Centre of Excellence in ICT</li>
                                <li>DBC Certification | Ghana-India Kofi Annan Centre of Excellence in ICT</li>
                                {/* Add more certifications here as needed */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
