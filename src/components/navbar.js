import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'

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
        <div className='links'>
          <Link to='/'> Home </Link>
          <Link to='/projects'> Projects </Link>
          <Link to='/resume'> Resume </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar