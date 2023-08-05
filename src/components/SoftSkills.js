// SoftSkills.js
import React from 'react'

const softSkills = [
    "Attention to Detail",
    "Creativity",
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Leadership",
    "Relationship Building",
    "Conflict Resolution",
    "Adaptability",
    "Integrity",
    "Resilience"
];

const SoftSkills = () => {
    return (
        <div>
            <h3>Soft Skills</h3>
            <div className='skillsContainer'>
                {softSkills.map((skill, index) => (
                    <div className="skillTile" key={index}>
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SoftSkills
