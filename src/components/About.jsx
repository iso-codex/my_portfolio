import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container about-grid">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="about-image"
                >
                    <div className="image-wrapper">
                        <img src="/ava.png" alt="Jason Martin" />
                        <div className="image-border"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="about-text"
                >
                    <h3 className="section-subtitle">Biography</h3>
                    <h2 className="section-title">Who is <span className="text-accent">Rodney?</span></h2>
                    <p className="about-email">pkosimpson@gmail.com</p>

                    <p className="about-description">
                        Software Developer with over 5 years of experience specializing in Full Stack Development
                        and modern web architectures. I can implement effective IT Strategies at local and global levels.
                        My greatest strength is business awareness, which enables me to permanently streamline
                        infrastructure and applications.
                    </p>

                    <div className="about-info">
                        <div className="info-item">
                            <span className="info-label">Location</span>
                            <span className="info-value">East Legon Hills, Accra</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Experience</span>
                            <span className="info-value">5+ Years</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
