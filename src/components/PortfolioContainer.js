import Header from './Header'
import Content from './Content'
import Body from './Body'
import Project from './Project'
import Resume from './Resume'
import '../styles/portfolioContainer.css'
import { useState } from 'react'


const PortfolioContainer = () => {
    const [body, setBody] = useState(<Body />);
    const [style, setStyle] = useState({
        about: {
            color: '#f19b2c'
        },
        projects: {
            color: 'white'
        },
        resume: {
            color: 'white'
        }
    })
    
    const loadAbout = () => {
        setBody(<Body />)
        setStyle({
            about: {
                color: '#f19b2c'
            },
            projects: {
                color: 'white'
            },
            resume: {
                color: 'white'
            }
        })
    }

    const loadProjects = () => {
        setBody(<Project />)
        setStyle({
            about: {
                color: 'white'
            },
            projects: {
                color: '#f19b2c'
            },
            resume: {
                color: 'white'
            }
        })
    }

    const loadResume = () => {
        setBody(<Resume />)
        setStyle({
            about: {
                color: 'white'
            },
            projects: {
                color: 'white'
            },
            resume: {
                color: '#f19b2c'
            }
        })
    }
    
    
    return (
        <div className='content'>
            <Header loadAbout={loadAbout} loadProjects={loadProjects} loadResume={loadResume} style={style}/>
            <Content content={body}/>
        </div>
    )
}

export default PortfolioContainer