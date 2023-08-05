import React from 'react'
import '../styles/Home.css'
import TechnicalSkills from '../components/TechnicalSkills.js'
import SoftSkills from '../components/SoftSkills.js'
import ResponsiveHero from '../components/ResponsiveHero'
import ProjectItem from '../components/ProjectItem';
import { projectList } from "../helpers/ProjectList";


function Home() {
  return (
    <main className='home'>
      <header className='about'>
        <ResponsiveHero />
      </header>
      <section className='wrapper'>
        <div className='row'>
          <h2 className='title'>My Projects</h2>
          <div className="projects">
            <div className="projectList">
              {projectList.map((project, index) => {
                return <ProjectItem key={index} id={index} name={project.name} image={project.image} />
              })}
            </div>
          </div>
        </div>
      </section>
      <section className='wrapper'>
        <section className='row'>
          <h2 className='title'>Technical Skills</h2>
          <TechnicalSkills />
        </section>
        <section className='row'>
          <h2 className='title'>Professional Skills</h2>
          <SoftSkills />
        </section>
      </section>
    </main>
  )
}

export default Home
