import React from 'react'
import '../styles/Home.css'
import TechnicalSkills from '../components/TechnicalSkills.js'
import SoftSkills from '../components/SoftSkills.js'
import ResponsiveHero from '../components/ResponsiveHero'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className='home'>
      <header className='about'>
        <ResponsiveHero />
      </header>
      <section className='skillsWrapper'>
        <section className='skillsRow'>
          <h2 className='skillTitle'>Technical Skills</h2>
          <TechnicalSkills />
        </section>
        <section className='skillsRow'>
          <h2 className='skillTitle'>Professional Skills</h2>
          <SoftSkills />
        </section>
      </section>
    </main>
  )
}

export default Home
