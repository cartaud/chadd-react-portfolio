import '../styles/Project.css'
const Project = () => {
    return (
    <div className="body-container">
        <header>
            <h1 className="orange">MY PROJECTS</h1>
            <h2>CLICK ON THE PROJECT TO VIEW</h2>
        </header>
        <div className="projects">
            <div>
                <div className="project-container">
                    <a href="https://github.com/cartaud/mvcTechBlog" target="_blank" rel="noreferrer">
                    <img src={require('../images/techBlog.png')}  alt="Tech Blog" />
                    <div className="project-title">
                        <h5>Tech Blog</h5>
                        <h6>MVC</h6>
                    </div>
                    </a>
                </div>
                <div className="project-container">
                    <a href="https://github.com/cartaud/E-CommerceBackEnd" target="_blank" rel="noreferrer">
                    <img src={require('../images/eCom.png')}  alt="E-Commerce" />
                    <div className="project-title">
                        <h5>E-Commerce</h5>
                        <h6>ORM</h6>
                    </div>
                    </a>
                </div>
                <div className="project-container">
                    <a href="https://github.com/cartaud/expressNoteTaker" target="_blank" rel="noreferrer">
                    <img src={require('../images/noteTaker.png')}  alt="Note Taker" />
                    <div className="project-title">
                        <h5>Note Taker</h5>
                        <h6>Express.JS</h6>
                    </div>
                    </a>
                </div>
            </div>

            <div>
                <div className="project-container">
                    <a href="https://github.com/cartaud/employeeTracker" target="_blank" rel="noreferrer">
                    <img src={require('../images/employeeTracker.png')}  alt="Employee Tracker" />
                    <div className="project-title">
                        <h5>Employee Tracker</h5>
                        <h6>SQL</h6>
                    </div>
                    </a>
                </div>
                <div className="project-container">
                    <a href="https://cartaud.github.io/etch-a-sketch/" target="_blank" rel="noreferrer">
                    <img src={require('../images/etch.png')}  alt="Etch-A-Sketch" />
                    <div className="project-title">
                        <h5>Etch-A-Sketch</h5>
                        <h6>Javascript</h6>
                    </div>
                    </a>
                </div>
                <div className="project-container">
                    <a href="https://github.com/cartaud/vinylMusicShop" target="_blank" rel="noreferrer">
                    <img src={require('../images/musicStore.png')}  alt="Music Store" />
                    <div className="project-title">
                        <h5>Music Store</h5>
                        <h6>Fullstack</h6>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Project