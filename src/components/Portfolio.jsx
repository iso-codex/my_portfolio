import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            category: 'Full Stack',
            description: 'A modern e-commerce platform built with Next.js, Stripe, and PostgreSQL.',
            tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop'
        },
        {
            title: 'Task Management App',
            category: 'Web Application',
            description: 'Real-time collaborative task management with drag-and-drop functionality.',
            tech: ['React', 'Firebase', 'Tailwind CSS'],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
        },
        {
            title: 'AI Chat Interface',
            category: 'AI Integration',
            description: 'Intelligent chatbot interface with natural language processing capabilities.',
            tech: ['React', 'OpenAI API', 'Node.js'],
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
        },
        {
            title: 'Analytics Dashboard',
            category: 'Data Visualization',
            description: 'Interactive dashboard for real-time data analytics and reporting.',
            tech: ['React', 'D3.js', 'Express', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
        },
        {
            title: 'Social Media Platform',
            category: 'Full Stack',
            description: 'Social networking platform with posts, comments, and real-time messaging.',
            tech: ['React', 'Socket.io', 'Node.js', 'Redis'],
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop'
        },
        {
            title: 'Fitness Tracker',
            category: 'Mobile App',
            description: 'Cross-platform fitness tracking app with workout plans and progress tracking.',
            tech: ['React Native', 'Firebase', 'Redux'],
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop'
        }
    ];

    return (
        <section id="portfolio" className="portfolio section-padding">
            <div className="container">
                <h3 className="section-subtitle">My Work</h3>
                <h2 className="section-title">Featured <span className="text-accent">Projects</span></h2>

                <div className="portfolio-grid">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="project-card"
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href="#" className="project-link">
                                            <Github size={20} />
                                        </a>
                                        <a href="#" className="project-link">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
