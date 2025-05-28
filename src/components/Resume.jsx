import React from 'react'
import './style/Resume.css'
import resume from '../images/Harsh Bhuva_Resume.jpg'

const Resume = () => {
    return (
        <>
        <div id="resume" className='pt-5'>
            <div className="container text-center">
                <div className="div pb-3">
                    <p className="section--title"><span className="highlights "> Resume</span></p>
                </div>
                <div className="download-btn">
                    <a href="/Harsh_Bhuva_Resume.pdf" download className="btn btn-sm btn-purple text-white fs-5" style={{ backgroundColor: "#6d20c5d7" }}>
                        ⬇ Download
                    </a>
                </div>
            </div>

            <div className="container pt-5 pb-5 d-flex justify-content-center">
                <img src={resume} alt="Resume" className='resume-img'/>
            </div>

            <div className="container text-center pb-5">
                <div className="download-btn">
                    <a href="/Harsh_Bhuva_Resume.pdf" download className="btn btn-sm btn-purple text-white fs-5" style={{ backgroundColor: "#6d20c5d7" }}>
                        ⬇ Download
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Resume