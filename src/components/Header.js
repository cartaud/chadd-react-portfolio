import Navigation from './Navigation'
import Social from './Social'
import '../styles/Header.css'

const Header = (props) => {
    return (
        <div className='header'>
            <header>
                <h3>Chadd Artaud</h3>
                <div>Full Stack Coding Portfolio</div>
            </header>
            <Navigation loadAbout={props.loadAbout} loadProjects={props.loadProjects} loadResume={props.loadResume}/>
            <Social />
        </div>
    )
}

export default Header