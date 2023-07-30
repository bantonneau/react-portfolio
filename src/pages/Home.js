import React from 'react'
import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'> 
        <h2>Hi, My Name is Ben</h2>
        <div className='prompt'>
          <p>
            I'm a Full Stack Developer with a strong understanding of both front-end and back-end technologies. My previous experience in graphic and apparel design gives me a unique set of skills and an eye for beauty and good design. When I'm not building websites you will find me lifting weights, designing clothes, or working on unity games with my friends.
          </p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      {/*Make an array of technical skills and soft skills and map them to tile components */}
      {/*Add toggle to switch between technical and soft skills, with nice tile fade in animation when switching? */}
      <div className='skills'> 
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> </h2>
            <span> </span>
          </li>
          <li className='item'>
            <h2> Soft Skills</h2>
            <span> </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home