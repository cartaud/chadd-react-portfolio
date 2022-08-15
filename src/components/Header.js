import Navigation from './Navigation'
import Social from './Social'

const styles = {
    header: {
        backgroundColor: '#202020',
        width: '25%',
        padding: '20px 10px',
    },   
    title: {
        color: '#f19b2c',
        fontFamily: 'Edu VIC WA NT Beginner, cursive',
        fontSize: '35px',
        margin: '0',
        lineHeight: '1em',
    },
    subTitle: {
        color: 'white',
    },
};

const Header = (props) => {
    return (
        <div style={styles.header}>
            <header>
                <h3 style={styles.title}>Chadd Artaud</h3>
                <div style={styles.subTitle}>Full Stack Coding Portfolio</div>
            </header>
            <Navigation loadAbout={props.loadAbout} loadProjects={props.loadProjects} loadResume={props.loadResume} style={props.style}/>
            <Social />
        </div>
    )
}

export default Header