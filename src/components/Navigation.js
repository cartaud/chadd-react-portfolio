import '../styles/Navigation.css'

const Navigation = (props) => {

    return (
        <div className='directory-container'>
            <button onClick={props.loadAbout}>ABOUT ME</button>
            <button onClick={props.loadProjects}>PROJECTS</button>
            <button onClick={props.loadResume}>RESUME</button>    
            <br /><br />
        </div>
    )
}

export default Navigation