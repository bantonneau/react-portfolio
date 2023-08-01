import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


function ProjectItem({ image, name, id }) {
    const navigate = useNavigate();

    const scrollToTop = () => {
        // Check if smooth behavior is supported
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo(0, 0);
        }
    };

    const handleClick = () => {
        navigate("/project/" + id);
        scrollToTop();
    };

    useEffect(() => {
        return () => scrollToTop();
    }, []);

    return (
        <div className='projectItem' onClick={handleClick}>
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1> {name} </h1>
        </div>
    );
}

export default ProjectItem