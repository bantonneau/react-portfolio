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
