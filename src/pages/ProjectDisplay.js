import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList';
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
    return (
        <div className='project'>
            <h1> {project.name} </h1>
            <img src={project.image} alt='project demo' />

            <div className='linkButtons'>
            {project.github ? <button className='button' onClick={() => window.open(project.github, '_blank')}>GitHub</button> : ""}
            {project.demo ? <button className='button' onClick={() => window.open(project.demo, '_blank')}>Demo</button> : ""}
            {project.live ? <button className='button' onClick={() => window.open(project.live, '_blank')}>Live</button> : ""}
            </div>

            <p> {project.description} </p>
            <p><b>Skills Utilized:</b> {project.technologies}</p>
            <div>
                {project.features.map((skill, index) => (
                    <ul key={index}>
                       <li> {skill} </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default ProjectDisplay