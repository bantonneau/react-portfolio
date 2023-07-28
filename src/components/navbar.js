import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div className='navbar'>
        <div className='toggleButton'>
            <button> </button>
        </div>
        <div className='links'>
            <Link to='/'> Home </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/resume'> Resume </Link>
        </div>
    </div>
  )
}

export default navbar