import React from 'react'
import "./style/Experiance.css"

const Experiance = () => {
    const roadmap = [
        {
            title: "TechnoHacks",
            description: "Web Developer",
            technologies: "HTML, CSS, Bootstrap",
            date: "July 2023 to July 2023"
        },
        {
            title: "Amar Infotech",
            description: "Frontend React Js Developer",
            technologies: "HTML, CSS, Bootstrap, Javascript, React js",
            date: "December 2024 to Present"
        },
    ];
    return (
            <div id="experiance" className="pt-2 pb-5">
                <h1 className="text-center text-purple mb-5">Experience</h1>
                <div className="timeline">
                    {roadmap.map((item, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-content shadow-lg">
                                <h3 className='highlights'>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>{item.technologies}</p>
                                <span className="timeline-date">{item.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
}
export default Experiance