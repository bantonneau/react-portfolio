import React, { useState } from 'react'
import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import '../styles/Home.css'
import TechnicalSkills from '../components/TechnicalSkills.js'
import SoftSkills from '../components/SoftSkills.js'
import benos from '../assets/laptop.jpg'
import { Link } from 'react-router-dom'

function Home() {
  const [showTechnical, setShowTechnical] = useState(true);

  return (
    <main className='home'>
      <header className='about'>
        <section className='hero'>
          <div className='image-cropper'>
            <img src={benos} alt='benos avatar' className="rounded" />
          </div>
          <div className='herotext'>
            <h1>Hi there! I'm Ben</h1>
            <h2>Full Stack Web Developer</h2>
          </div>
        </section>
      </header>
      <section className='aboutme'>
        <article className='prompt'>
          <p>
            I'm a Full Stack Developer with a strong understanding of both front-end and back-end technologies. My previous experience in graphic and apparel design gives me a unique set of skills with the Adobe Creative Suite. When I'm not building websites you will find me lifting weights, designing clothes, or working on unity games with my friends.
          </p>
        </article>
        <nav className='socialLinks'>
          <Link to="https://www.linkedin.com/in/benantonn/" target='_blank'>
            <LinkedIn />
          </Link>
          <Link to='mailto:benantonn@gmail.com' target='_blank'>
            <Email />
          </Link>
          <Link to='https://github.com/bantonneau' target='_blank'>
            <GitHub className='githubIcon' />
          </Link>
        </nav>
      </section>
      <section className='skills'>
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
      </section>
    </main>
  )
}

export default Home
