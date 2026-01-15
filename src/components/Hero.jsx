import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <h2 className="hero-subtitle">Software Developer</h2>
                    <h1 className="hero-title">
                        Rodney <br />
                        <span className="text-accent">Simpson</span>
                    </h1>
                    <div className="hero-btns">
                        <a href="#resume" className="btn btn-outline">Resume</a>
                        <a href="#portfolio" className="btn btn-solid">Portfolio</a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="hero-socials"
                >
                    <a href="#"><Github size={20} /></a>
                    <a href="#"><Linkedin size={20} /></a>
                    <a href="#"><Twitter size={20} /></a>
                    <a href="#"><Instagram size={20} /></a>
                    <a href="#"><Mail size={20} /></a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
