import React from 'react'
import { GitHub, LinkedIn, Email } from '@material-ui/icons'
import '../styles/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'> 
        <div className='socialMedia'>
          <Link to="https://www.linkedin.com/in/benantonn/" target='_blank'>
            <LinkedIn />
          </Link>
          <Link to='mailto:benantonn@gmail.com' target='_blank'>
            <Email />
          </Link>
          <Link to='https://github.com/bantonneau' target='_blank'>
            <GitHub className='githubIcon' />
          </Link>
        </div>
        <p> &copy; Bennett Antonneau 2023</p>
    </div>
  )
}

export default Footer