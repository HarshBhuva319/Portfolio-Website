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
            <div className="footer container-fluid">
                <div className="row d-flex justify-content-center p-4">
                    <div className="col-lg-5 col-md-12 ps-3 pt-3">
                        <p>Designed and Developed by Harsh Bhuva</p>
                    </div>

                    <div className="col-lg-3 col-md-12 ps-5 pt-3">
                        <p>Copyright © 2025 HB</p>
                    </div>

                    <div className=' col-lg-4 col-md-12 d-flex justify-content-evenly'>
                        <button className="nav-link" href="#">
                            <a href="#" style={{textDecoration:"none", color:"white"}}>
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
                    </div>
                </div>
                <div className="section text-center pt-5">
                    <h2>FIND ME ON</h2>
                    <p>Feel free to <span className="purple">connect</span> with me</p>
                    <div className="social-icons pb-5">
                        <a href="https://github.com/HarshBhuva319" target='blank'>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/harsh-bhuva-4a35371ba/"  target='blank'>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://mail.google.com/mail/harshbhuva319@gmail.com" target='blank'>
                            <i className="fa fa-envelope" ></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer