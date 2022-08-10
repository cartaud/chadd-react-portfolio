import '../styles/Navigation.css'

const Navigation = (props) => {
    
    return (
        <div className='directory-container'>
            <button onClick={props.loadAbout} style={props.style.about}>ABOUT ME</button>
            <button onClick={props.loadProjects} style={props.style.projects}>PROJECTS</button>
            <button onClick={props.loadResume} style={props.style.resume}>RESUME</button>    
            <br /><br />
        </div>
    )
}

export default Navigation