import '../styles/Body.css'

const Body = () => {
    

    return (
        <div className="body-container">
            <header>
                <h1 className="orange">MY NAME IS CHADD ARTAUD</h1>
                <h2>DEDICATED TO WRITING CLEAN CODE</h2>
            </header>
            <div className="bio-container">
                <div className="portrait-container">
                    <img alt="profile" src={require('../images/profile.png')}/>
                </div>
                <div className="bio">
                    <p>
                        My name is Chadd Artaud and I was born and raised in San Diego, California. I am a 24 year old
                        beginning my journey into software engineering. My first experience with coding was as an 
                        undergraduate at the University of Nevada, Reno where I earned my Bachelors of Science in Mechanical 
                        Engineering. I enjoy solving challenging problems as there is no better feeling than solving 
                        a problem that you have been working on for a long period of time. 
                    </p>
                    <br /><br />
                    <p>
                        When I first started learning software development, I was a self learner for 6 months. Once I had a firm grasp of 
                        the basics, I decided to take the next step and sign up for a full stack software development bootcamp through University of California, 
                        San Diego Extension program. My goal for myself is to be working as a software engineer by the end of this year
                        where I can continuously learn and improve my software engineering skills.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Body