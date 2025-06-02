import "./style/Home.css";
import home_image from "../images/home-photo.png"

const Home = () => {
    const words = ["React Js Developer", "Frontend Developer"];
    let i = 0;
    let j = 0;
    let currentWord = '';
    let isDeleting = false;

    function type() {
        const typing = document.getElementById("typing");
        if (i < words.length) {
            if (isDeleting == false && j <= words[i].length) {
                currentWord = words[i].substring(0, j++);
            }
            else if (isDeleting && j >= 0) {
                currentWord = words[i].substring(0, j--);
            }

            if (typing) {
                typing.textContent = currentWord;
            }

            if (j === words[i].length) {
                isDeleting = true;
            }
            if (j === 0 && isDeleting) {
                isDeleting = false;
                i = (i + 1) % words.length;
            }
        }
        setTimeout(type, isDeleting ? 100 : 200);
    }
    type();

    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    return (
        <>
            <div id='home'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                            <h3>Hi There!<span>👋🏻</span></h3>
                            <h1 className="fw-bold fs-1">I'M <span>HARSH BHUVA</span></h1>
                            <h1><span className="highlight fw-bold" id="typing">WEB DEVELOPER</span><span className="cursor"></span></h1>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <img src={home_image} alt="" className='home_image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home