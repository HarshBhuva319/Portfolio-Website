import React from 'react'
import './style/Resume.css'
import resume_page_1 from '../images/Harsh_Bhuva_Resume_page-0001.jpg'
import resume_page_2 from '../images/Harsh_Bhuva_Resume_page-0002.jpg'

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

            <div className="resume container pt-5 pb-5 gap-4 d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 p-2">
                        <img src={resume_page_1} alt="Resume" className='resume-img'/>
                    </div>
                    <div className="col-lg-6 col-sm-12 p-2">
                        <img src={resume_page_2} alt="Resume" className='resume-img'/>
                    </div>
                </div>
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