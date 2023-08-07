import React from 'react'
import '../styles/resume.css'
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Resume() {
  return (
    <div className='resumeContainer'>
      <Link to="/" className='backArrow'>
        <ArrowBack /> <h2>Back</h2>
      </Link>
      <section className='resumeHeader'>
        <h1>Bennett Antonneau</h1>
        <p>AntonneauWebDev.com - 414-731-5209 - benantonn@gmail.com - www.linkedin.com/in/benantonn/</p>
      </section>
      <h2>Education</h2>
      <hr></hr>
      <p><b>University of Wiscosin-Madison</b> - Madison, WI</p>
      <p>● Retailing & Consumer Behavior - Bachelor of Science</p>
      <p><b>University of Minnesota-Twin Cities</b> - Minneapolis, MN</p>
      <p>● Full Stack Bootcamp - Portfolio: AntonneauWebDev.com</p>
      <h2>Skills</h2>
      <hr></hr>
      <section className='resumeSkills'>
        <p>HTML | CSS | JavaScript | React | Node.js | Express.js | MongoDB | MySQL | MVC Framework</p>
        <p>Restful APIs | GraphQL | OAuth | Bootstrap | Git | Heroku | NPM | Agile Development | Adobe Creative Suite</p>
      </section>
      <h2>Development Experience</h2>
      <hr></hr>
      <section className='devExperience'>
        <h3>Job Board Application</h3>
        <p>● Led a full-stack development team in constructing a Job Board Application with Agile development methodologies</p>
        <p>● Utilized Node.js and Express.js to handle back-end operations, Handlebars.js for templating, and MySQL with Sequelize ORM for database management, demonstrating a strong understanding of full-stack development.</p>
        <p>● Integrated the application with Heroku and JawsDB for seamless deployment and database management, showcasing my abilities in DevOps.</p>
        <h3>React Portfolio</h3>
        <p>● Developed a responsive personal portfolio website using React, react-router-dom, Material UI, and React Hooks, exhibiting expertise in modern web development practices.</p>
        <p>● Created a dynamic projects section where each project is represented by a ProjectItem component, showcasing the ability to work with dynamic data and rendering components based on that data.</p>
        <p>● Used hooks such as useState and useEffect in components like Navbar.js to control component states and lifecycle events, showcasing a deep understanding of the React Hooks system.</p>
        <h3>Social Media API</h3>
        <p>● Single-handedly developed a server-side Social Network application using Express.js server, MongoDB database via Mongoose, and Moment.js for date handling, highlighting advanced backend development skills.</p>
        <p>● Built an Express.js server to handle API routing, demonstrating proficiency in server-side JavaScript development.</p>
        <p>● Enabled comprehensive CRUD operations on users, thoughts, and reactions, testing API endpoints with tools like Insomnia Core and Postman for flawless functionality.</p>
        <p>● Leveraged Mongoose to interact with a MongoDB database for managing users, thoughts, and reactions, illustrating my strong abilities in database management and operations.</p>
      </section>
      <h2>Employment History</h2>
      <hr></hr>
      <section className='employmentHistory'>
        <section className='resumeTitle'>
          <div className='companyTitle'>
            <h3>Kohl's</h3>
            <i> - Assistant Designer</i>
          </div>
          <p>March 2022-Present</p>
        </section>
        <p>● Conducted exhaustive market and competitor research, using analysis tools like Edited and WGSN, to drive trend-based design decisions.</p>
        <p>● Mastered Adobe Illustrator for product ideation and sketching, working closely with the Technical Design team to ensure design integrity.</p>
        <p>● Negotiated strategically with vendors to meet lean price targets and effectively managed last-minute fabric and trim changes to avoid significant supply commitments.</p>
        <p>● Effectively utilized PLM software for BOM setup, bid line management, and maintaining product shells.</p>
        <p>● Presented comprehensive market overviews and design proposals to leadership, influencing the new direction of the brand.</p>
      </section>
    </div>
  )
}

export default Resume