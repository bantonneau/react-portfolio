import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import { GitHub, LinkedIn, Email, Assignment } from '@material-ui/icons'

function Navbar() {

  return (
    <div className='navbar'>
      <div className='navbarSocialMedia'>
        <Link to="https://www.linkedin.com/in/benantonn/" target='_blank'>
          <LinkedIn />
        </Link>
        <Link to='mailto:benantonn@gmail.com' target='_blank'>
          <Email />
        </Link>
        <Link to='https://github.com/bantonneau' target='_blank'>
          <GitHub className='githubIcon' />
        </Link>
        <Link to="/resume">
          <Assignment />
        </Link>
      </div>
    </div>
  )
}

export default Navbar