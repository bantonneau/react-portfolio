import React, { useState } from 'react'
import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import '../styles/Home.css'
import TechnicalSkills from '../components/TechnicalSkills.js'
import SoftSkills from '../components/SoftSkills.js'

function Home() {

  const [showTechnical, setShowTechnical] = useState(true);

  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Ben</h2>
        <div className='prompt'>
          <p>
            I like to code xd xd
            {/* I'm a Full Stack Developer with a strong understanding of both front-end and back-end technologies. My previous experience in graphic and apparel design gives me a unique set of skills and an eye for beauty and good design. When I'm not building websites you will find me lifting weights, designing clothes, or working on unity games with my friends. */}
          </p>
          <LinkedIn />
          <Email />
          <GitHub className='githubIcon' />
        </div>
      </div>
      {/*Make an array of technical skills and soft skills and map them to tile components */}
      {/*Add toggle to switch between technical and soft skills, with nice tile fade in animation when switching? */}
      <div className='skills'>
        
        <div className="toggleContainer">
          <label className="toggle">
            <input type="checkbox" onChange={() => setShowTechnical(!showTechnical)} />
            <span className="slider"></span>
            <span className="labels" data-on="Soft Skills" data-off="Technical Skills"></span>
          </label>
        </div>

        <div className="skillsContainer">
          {showTechnical ? <TechnicalSkills /> : <SoftSkills />}
        </div>
      </div>
    </div>
  )
}

export default Home