import React from 'react'
import "./style/Project.css"
import WanderWise from "../images/WanderWise.png"
import UrbanFood from "../images/UrbanFood.png"
import Portfolio from "../images/portfolio.png"

const Project = () => {
  return (
    <>
    <div id="project">
        <div className="container text-center mb-5">
          <h2 className="section--title"><span className="highlights"> Projects</span></h2>
        </div>

        <div className="container" style={{paddingBottom:"100px"}}>
          <div className="row g-4">
            <div className="col-lg-4 col-md-12">
              <div className="project-card text-center">
                <img src={WanderWise} alt="WanderWise" className="project-img" />
                <h5 className='highlights pt-3 fs-4'>WanderWise</h5>
                <p className="project-description pt-2">
                  Travel-focused website created to inspire and guide modern explorers destination guides and personalized trip planning tools.
                </p><br />
                <p><span className='highlights'>Technologies</span> :- HTML, CSS, Javascript</p>
                <a href="https://github.com/HarshBhuva319/WanderWise" className="btn btn-custom" target='blank'><i className="fab fa-github"></i> GitHub</a>
                {/* <a href="#" className="btn btn-custom"><i className="fas fa-desktop"></i> Demo</a> */}
              </div>
            </div>


            <div className="col-lg-4 col-md-12">
              <div className="project-card text-center">
                <img src={UrbanFood} alt="UrbanFood" className="project-img" />
                <h5 className='highlights pt-3 fs-4'>Urban Foods</h5>
                <p className="project-description pt-2">
                  Urban Foods is a modern food service website developed to offer a seamless dining experience, featuring a dynamic online menu.
                </p><br />
                <p><span className='highlights'>Technologies</span> :- HTML, CSS, Bootstrap</p>
                <a href="https://github.com/HarshBhuva319/Urban-Food" className="btn btn-custom" target='blank'><i className="fab fa-github"></i> GitHub</a>
                {/* <a href="#" className="btn btn-custom"><i className="fas fa-desktop"></i> Demo</a> */}
              </div>
            </div>


            <div className="col-lg-4 col-md-12">
              <div className="project-card text-center">
                <img src={Portfolio} alt="Portfolio" className="project-img" />
                <h5 className='highlights pt-3 fs-4'>Portfolio Website</h5>
                <p className="project-description pt-2">
                  An online markdown editor built with React.js. Supports HTML, CSS, and JS preview, GFM syntax,
                  auto-save with LocalStorage, and custom toolbar.
                </p><br />
                <p><span className='highlights'>Technologies</span> :- HTML, CSS, Bootstrap, React js</p>
                <a href="#" className="btn btn-custom"><i className="fab fa-github" target='blank'></i> GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
      )
}

      export default Project