import Header from './Header'
import Body from './Body'
import Project from './Project'
import Resume from './Resume'
import '../styles/portfolioContainer.css'
import { useState } from 'react'


const PortfolioContainer = () => {

    const [body, setBody] = useState(<Body />);
    
    const loadAbout = () => {
        setBody(<Body />)
    }

    const loadProjects = () => {
        setBody(<Project />)
    }

    const loadResume = () => {
        setBody(<Resume />)
    }
    
    return (
        <div className='content'>
            <Header loadAbout={loadAbout} loadProjects={loadProjects} loadResume={loadResume}/>
            {body}
        </div>
    )
}

export default PortfolioContainer