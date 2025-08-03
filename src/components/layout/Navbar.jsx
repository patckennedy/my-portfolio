// src/components/Layout/Navbar.jsx
import { useState, useEffect } from 'react';
import '../UI/Button.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <a href="/" className="logo">
                        YourName
                    </a>

                    <button
                        className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav
                        className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}
                    >
                        <a
                            href="#projects"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Projects
                        </a>
                        <a
                            href="#about"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                        <a
                            href="#contact"
                            className="btn btn-outline"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Hire Me
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
