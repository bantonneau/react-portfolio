// TechnicalSkills.js
import React from 'react'

export const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "APIs",
    "JQuery",
    "JSON",
    "AJAX",
    "Bootstrap",
    "Tailwind",
    "React",
  ];
  
export const backendSkills = [
    "Node.js",
    "Express.js",
    "MySQL",
    "Sequelize",
    "MVC Paradigm",
    "MongoDB",
    "NoSQL",
    "GraphQL",
    "MERN Stack",
    "OAuth"
];

const otherSkills = [
    "Git",
    "Heroku",
    "Webpack",
    "TypeScript",
    "NPM",
    "Jest",
    "Agile Development"
]



const TechnicalSkills = () => {
    return (
        <div>
            <h2>Front End</h2>
            <div className='skillsContainer'>
            {frontendSkills.map((skill, index) => (
                <div className="skillTile" key={index}>
                    {skill}
                </div>
            ))}
            </div>

            <h2>Back End</h2>
            <div className='skillsContainer'>
            {backendSkills.map((skill, index) => (
                <div className="skillTile" key={index}>
                    {skill}
                </div>
            ))}
             </div>

            <h2>Other</h2>
            <div className='skillsContainer'>
            {otherSkills.map((skill, index) => (
                <div className="skillTile" key={index}>
                    {skill}
                </div>
            ))}
            </div>
        </div>
    )
}

export default TechnicalSkills
