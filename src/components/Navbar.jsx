import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./style/Navbar.css";
import logo from "../images/Logo.png"

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark position-sticky px-4 top-0">
                <button className="nav-link" href="#home" onClick={() => scrollToSection('home')}>
                    <img src={logo} alt="" id="logo" />
                            </button>
                
                <button className="navbar-toggler justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link" href="#">
                                <a href="#" style={{textDecoration:"none", color:"white"}} >
                                <i className="fas fa-home"></i> Home
                                </a>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#about" onClick={() => scrollToSection('about')}>
                                <i className="fas fa-user" ></i> About
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#project" onClick={() => scrollToSection('project')}>
                                <i className="fas fa-code"></i> Projects
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#Experiance" onClick={() => scrollToSection('experiance')}>
                                <i className="fas fa-briefcase"></i> Experiance
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#resume" onClick={() => scrollToSection('resume')}>
                                <i className="fas fa-file-alt"></i> Resume
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar