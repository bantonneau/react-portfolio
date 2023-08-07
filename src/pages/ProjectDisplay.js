import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList';
import '../styles/ProjectDisplay.css'
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
    return (
        <div className='project'>
            <Link to="/" className='backArrow'>
                <ArrowBack /> <h2>Back</h2>
            </Link>
            <h1> {project.name} </h1>
            <img src={project.image} alt='project demo' />

            <section className='linkButtons'>
            {project.github ? <button className='button' onClick={() => window.open(project.github, '_blank')}>GitHub</button> : ""}
            {project.demo ? <button className='button' onClick={() => window.open(project.demo, '_blank')}>Demo</button> : ""}
            {project.live ? <button className='button' onClick={() => window.open(project.live, '_blank')}>Live</button> : ""}
            </section>

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