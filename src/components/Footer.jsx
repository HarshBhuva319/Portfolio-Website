import React from 'react'
import "./style/Footer.css"

const Footer = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="row">

                        <div class="col-md-4">
                            <h5>About</h5>
                            <p>Front-End Developer passionate about modern web experiences and responsive design.</p>
                        </div>

                        <div class="col-md-4">
                            <h5>Quick Links</h5>
                            <ul class="list-unstyled">
                                <button className="nav-link" href="#">
                                    <a href="#" style={{ textDecoration: "none", color: "white" }}>
                                        Home
                                    </a>
                                </button>
                                <button className="nav-link" href="#about" onClick={() => scrollToSection('about')}>
                                    About
                                </button>
                                <button className="nav-link" href="#project" onClick={() => scrollToSection('project')}>
                                    Projects
                                </button>
                                <button className="nav-link" href="#experiance" onClick={() => scrollToSection('experiance')}>
                                    Experiance
                                </button>
                                <button className="nav-link" href="#resume" onClick={() => scrollToSection('resume')}>
                                    Resume
                                </button>
                            </ul>
                        </div>

                        <div class="col-md-4">
                            <h5>Contact</h5>
                            <p>Email : harshbhuva319@gmail.com</p>
                            <p>Mobile No : +91 6353336471</p>
                            <div class="social-icons">
                                <a href="https://github.com/HarshBhuva319" target='blank'>
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/harsh-bhuva-4a35371ba/" target='blank'>
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="footer-bottom mt-4">
                        &copy; 2025 Harsh Bhuva. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer