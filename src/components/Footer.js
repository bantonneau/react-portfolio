import React from 'react'
import { GitHub, LinkedIn } from '@material-ui/icons'
import '../styles/footer.css'

function Footer() {
  return (
    <div className='footer'> 
        <div className='socialMedia'> 
            <GitHub />
            <LinkedIn />
        </div>
        <p> &copy; Bennett Antonneau 2023</p>
    </div>
  )
}

export default Footer