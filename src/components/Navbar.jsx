import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Resume', href: '#resume' },
        { name: 'Portfolio', href: '#portfolio' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>
                <div className="nav-contact">
                    <Phone size={18} className="text-accent" />
                    <span>024-99-237-26</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
