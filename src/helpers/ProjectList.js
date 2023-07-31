import eCommerce from '../assets/eCommerceBackEnd.png'
import Employee from '../assets/EmployeeTracker.png'
import JobBoard from '../assets/jobmode.png'
import Notes from '../assets/NoteTaker.png'
import SocialMedia from '../assets/SocialMediaApi.png'

//add portfolio entry and weather dashboard entry

export const projectList = [
    {
        name: "Job Board",
        image: JobBoard,
        description: "A secure job board application featuring comprehensive listings, secure user authentication, and personalized job saving capabilities.",
        features: [
            "Led a team of three developers in building a comprehensive Job Board Application using agile development methodology, providing clear and efficient communication, and managing tasks effectively.",
            "Utilized Node.js and Express.js to handle back-end operations, Handlebars.js for templating, and MySQL with Sequelize ORM for database management, demonstrating a strong understanding of full-stack development.",
            "Implemented user authentication using express-session and cookies, increasing the security and personalization of the application.",
            "Integrated the application with Heroku and JawsDB for seamless deployment and database management, showcasing my abilities in DevOps.",
            "Enhanced user experience by developing a feature for saving jobs to user profiles and initiated the development of a job filter for experience level, job type (remote vs. in-person), and salary range.",
            "Managed sensitive data and API keys securely through the use of environment variables, ensuring the safety of user data and project integrity.",
                 ],
        technologies: "JavaScript, Node.js, Express.js, Handlebars.js, MySQL, Sequelize ORM, Express-Session, Heroku, JawsDB, Agile Development",
        github: "https://github.com/bantonneau/jobBoard",
        live: "https://ancient-dusk-05754-ae43192e47d1.herokuapp.com/",
    },
    {
        name: "Social Media Api",
        image: SocialMedia,
        description: "A server-side API application serving as the backend for a social network site with capabilities to manage users, thoughts, and reactions.",
        features: [
        "Solely developed a robust server-side application for a Social Network site, showcasing excellent problem-solving skills and understanding of backend development.",
        "Built an Express.js server to handle API routing, demonstrating proficiency in server-side JavaScript development.",
        "Leveraged Mongoose to interact with a MongoDB database for managing users, thoughts, and reactions, illustrating my strong abilities in database management and operations.",
        "Implemented comprehensive API routes to perform CRUD operations on users, thoughts, and reactions, improving the usability and functionality of the application.",
        "Employed testing tools like Insomnia Core or Postman to ensure the seamless functionality of all API endpoints.",
        "Integrated the Moment.js library for parsing, validating, manipulating, and formatting dates, enhancing the user experience and application performance.",
        ],
        technologies: "JavaScript, Node.js, Express.js, MongoDB, Mongoose, Moment.js",
        github: "https://github.com/bantonneau/social_media_api",
        demo: ""
    },
    {
        name: "eCommerce Backend",
        image: eCommerce,
        description: "A server-side application serving as the backend for an e-commerce platform with capabilities to manage products, categories, and tags.",
        features: [
        "Developed a comprehensive server-side application for an E-commerce platform, demonstrating proficiency in backend development and data management.",
        "Utilized Sequelize to interact with a MySQL database, effectively managing products, categories, and tags in the platform's database.",
        "Set up Express.js server to handle API routing, providing a solid infrastructure for server-side operations.",
        "Implemented extensive API routes to perform CRUD operations on products, categories, and tags, increasing the functionality and versatility of the platform.",
        "Leveraged testing tools such as Insomnia Core or Postman to verify the functionality of all API endpoints, ensuring a high-quality, bug-free application.",
        "Enabled smooth setup and usage through clear installation instructions, database seeding, and the usage of npm scripts, demonstrating attention to user experience even at the development stage.",
        ],
        technologies: "JavaScript, Node.js, Express.js, MySQL, Sequelize, MySQL2",
        github: "",
        demo: ""
    },
    {
        name: "Employee Tracker",
        image: Employee
    },
    {
        name: "Note Taker",
        image: Notes
    }
]