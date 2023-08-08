import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import benos from '../assets/laptop.jpg'
import ContactMe from './ContactMe'



function MobileHero() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <section className='hero'>
            <div className='image-cropper'>
                <img src={benos} alt='benos avatar' className="rounded" />
            </div>
            <h1>Hi there! I'm Ben</h1>
            <div className='herotext'>
                <p>I'm a Full Stack Developer with a strong understanding of both front-end and back-end technologies. My previous experience in graphic and apparel design gives me a unique set of skills with the Adobe Creative Suite. When I'm not building websites you will find me lifting weights, designing clothes, or working on unity games with my friends.</p>
            </div>
            <section className='buttons'>
                <button onClick={() => setIsOpen(true)}>Contact Me</button>
                <ContactMe className='modal'>Modal Content</ContactMe>
                <Link to="/resume"> 
                Resume
                </Link>
            </section>
        </section>
    )
}

export default MobileHero