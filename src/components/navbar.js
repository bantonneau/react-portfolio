import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import { GitHub, LinkedIn, Email } from '@material-ui/icons'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
      <div className='toggleButton'>
        <button onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}>
          <ReorderIcon />
        </button>
      </div>
      <div className='navbarElements'>
        <div>
          <Link to="/" >
            <div className="logoDesktop">
              AntonneauWebDev
            </div>
          </Link>
        </div>
        <div className='socialMedia'>
                <Link to="https://www.linkedin.com/in/benantonn/" target='_blank'>
                    <LinkedIn />
                </Link>
                <Link to='mailto:benantonn@gmail.com' target='_blank'>
                    <Email />
                </Link>
                <Link to='https://github.com/bantonneau' target='_blank'>
                    <GitHub className='githubIcon'/>
                </Link>
            </div>
      </div>
    </div>
  )
}

export default Navbar