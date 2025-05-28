import React from 'react'
import "./style/About.css";
import emoji from "../images/emoji.webp"

const About = () => {
    return (
        <div id="about">
            <section className="section-2 container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <h1><span className="text-white">LET ME</span> <span className="purple">INTRODUCE</span>  <span className="text-white">MYSELF</span></h1><br />

                        <p className='fs-5'>Hi Everyone, I am <span className="highlight">Harsh Bhuva</span> from <span className="highlight">Ahmedabad, India.</span></p>

                        <p className='fs-5'>I have completed B.Tech in <span className="highlight">Computer Science and Engineering </span>at <span className="highlight">Vidush Somany Institute of Technology and Research Gandhinagar</span>.</p>

                        <p className='fs-5'>I am currently employed as a <span className="highlight">Front - End developer</span> at <span
                            className="highlight">Amar InfoTech.</span></p>

                        <p className='fs-5'>Apart from coding, some other activities that I love to do!</p>

                        <div className="activities" style={{ paddingLeft: "30px", fontSize: "19px" }}>
                            <p><i className="fas fa-hand-point-right"></i> Playing Games</p>
                            <p><i className="fas fa-hand-point-right"></i> Physical Activities</p>
                            <p><i className="fas fa-hand-point-right"></i> Travelling</p>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12 intro-image">
                        <div className="intro-img mx-auto">
                            <img src={emoji} alt="avatar"  className='intro-img'/>
                            {/* https://cdn-icons-png.flaticon.com/512/4140/4140048.png */}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container text-white pb-5">
                <h2 className="skillset-heading">Technical <span>Skillset</span></h2>

                <div className="skill-grid row">
                    <div className="skill-card col fs-5"><i className="devicon-html5-plain colored"></i>&nbsp;HTML</div>
                    <div className="skill-card col fs-5"><i className="devicon-css3-plain colored"></i>&nbsp;CSS</div>
                    <div className="skill-card col fs-5"><i className="devicon-bootstrap-plain colored"></i>&nbsp;Bootstrap</div>
                    <div className="skill-card col fs-5"><i className="devicon-javascript-plain colored"></i>&nbsp;JavaScript</div>
                    <div className="skill-card col fs-5"><i className="devicon-react-plain colored"></i>&nbsp;React</div>
                </div>
            </div>
        </div>
    )
}

export default About