// src/components/Layout/Footer.jsx
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="/" className="logo">
                            YourName
                        </a>
                        <p>
                            Full-stack developer specializing in PERN stack and
                            Agentic AI
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <a href="#projects">Projects</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-social">
                        <h3>Connect</h3>
                        <div className="social-links">
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        &copy; {new Date().getFullYear()} Your Name. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
