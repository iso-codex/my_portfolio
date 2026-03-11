import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: 'Restuarant Menu System and Management',
            category: 'Full Stack',
            description: 'A modern investing tracking platform built with React.js and Supabase.',
            tech: ['React.js', 'TypeScript', 'TailwindCSS', 'Supabase'],
            image: 'https://images.unsplash.com/photo-1636835369131-e79f1266b599?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            liveLink: 'coralgardenswebsite.vercel.app', // <-- Place your actual site address here
            githubLink: 'https://github.com/iso-codex/your-repo' // <-- Place your GitHub link here
        },
        {
            title: 'Auto Sales Company Management System',
            category: 'Web Application',
            description: 'A simple landing page for an auto sale company with customer email communication.',
            tech: ['React', 'Email configuration', 'Tailwind CSS'],
            image: 'https://images.unsplash.com/photo-1574023240744-64c47c8c0676?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            liveLink: 'garagesys-cons.vercel.app', // <-- Place your actual site address here
            githubLink: 'https://github.com/iso-codex/your-repo' // <-- Place your GitHub link here
        },
        {
            title: 'School Management System',
            category: 'Web Application',
            description: 'A system for handling all school operations as well as staff and student records.',
            tech: ['React', 'Html','CSS','JavaScript', 'Supabase'],
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            liveLink: 'https://sms-zeta-eight.vercel.app/', // <-- Place your actual site address here
            githubLink: 'https://github.com/iso-codex/your-repo' // <-- Place your GitHub link here
        },
        {
            title: 'Investment Managment System',
            category: 'Data Visualization',
            description: 'Interactive dashboard for real-time data analytics and reporting.',
            tech: ['React', 'Javascript', 'Supabase'],
            image: 'https://images.unsplash.com/photo-1707762890671-52ef6d6f51e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            liveLink: 'https://zigma-crm.vercel.app/', // <-- Place your actual site address here
            githubLink: 'https://github.com/iso-codex/your-repo' // <-- Place your GitHub link here
        },
        // {
        //     title: 'Social Media Platform',
        //     category: 'Full Stack',
        //     description: 'Social networking platform with posts, comments, and real-time messaging.',
        //     tech: ['React', 'Socket.io', 'Node.js', 'Redis'],
        //     image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
        //     liveLink: 'https://your-site-url.com', // <-- Place your actual site address here
        //     githubLink: 'https://github.com/iso-codex/your-repo' // <-- Place your GitHub link here
        // },
        // {
        //     title: 'Fitness Tracker',
        //     category: 'Mobile App',
        //     description: 'Cross-platform fitness tracking app with workout plans and progress tracking.',
        //     tech: ['React Native', 'Firebase', 'Redux'],
        //     image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
        //     liveLink: 'https://your-site-url.com', // <-- Place your actual site address here
        //     githubLink: 'https://github.com/iso-codex/your-repo' // <-- Place your GitHub link here
        // },
        // {
        //     title: 'Fitness Tracker',
        //     category: 'Mobile App',
        //     description: 'Cross-platform fitness tracking app with workout plans and progress tracking.',
        //     tech: ['React Native', 'Firebase', 'Redux'],
        //     image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
        //     liveLink: 'https://your-site-url.com', // <-- Place your actual site address here
        //     githubLink: 'https://github.com/iso-codex/your-repo' // <-- Place your GitHub link here
        // }
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
                                        <a href={project.githubLink || "https://github.com/iso-codex"} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.liveLink || "#"} target="_blank" rel="noopener noreferrer" className="project-link">
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
