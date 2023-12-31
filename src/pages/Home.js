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
        <section className='row2'>
          <div className='spacer'></div>
          <div className='row'>
            <h2 className='title'>My Projects</h2>
            <hr className='projectBar'></hr>
            <div className="projects rowContent">
              <div className="projectList">
                {projectList.map((project, index) => {
                  return <ProjectItem key={index} id={index} name={project.name} image={project.image} />
                })}
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className='wrapper'>
        <section className='row2'>
          <div className='spacer'></div>
          <section className='row'>
            <h2 className='title'>Technical Skills</h2>
            <hr></hr>
            <TechnicalSkills />
          </section>
        </section>
        <section className='row2'>
          <div className='spacer'></div>
          <section className='row'>
            <h2 className='title'>Professional Skills</h2>
            <hr></hr>
            <SoftSkills />
          </section>
        </section>
      </section>
    </main>
  )
}

export default Home
