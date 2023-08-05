import React from 'react'
import benos from '../assets/laptop.jpg'
import { Link } from 'react-router-dom'
import { GitHub, LinkedIn, Email } from '@material-ui/icons'

function DesktopHero() {
    return (
        <section className='hero'>
            <section className='heroContent'>
                <div className='image-cropper'>
                    <img src={benos} alt='benos avatar' className="rounded" />
                </div>
                <div className='herotext'>
                    <h1>Hi there! I'm Ben</h1>
                    <p>I'm a Full Stack Developer with a strong understanding of both front-end and back-end technologies. My previous experience in graphic and apparel design gives me a unique set of skills with the Adobe Creative Suite. When I'm not building websites you will find me lifting weights, designing clothes, or working on unity games with my friends.</p>
                </div>
            </section>
            <div className='socialMedia'>
                <Link to="https://www.linkedin.com/in/benantonn/" target='_blank'>
                    <LinkedIn style={{ color: "var(--mainColor)" }}/>
                </Link>
                <Link to='mailto:benantonn@gmail.com' target='_blank'>
                    <Email style={{ color: "var(--mainColor)" }}/>
                </Link>
                <Link to='https://github.com/bantonneau' target='_blank'>
                    <GitHub className='githubIcon' style={{ color: "var(--mainColor)" }}/>
                </Link>
            </div>
        </section>
    )
}

export default DesktopHero