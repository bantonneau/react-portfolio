import eCommerce from '../assets/eCommerceBackEnd.png'
import Employee from '../assets/EmployeeTracker.png'
import JobBoard from '../assets/jobmode.png'
import Notes from '../assets/NoteTaker.png'
import SocialMedia from '../assets/SocialMediaApi.png'


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
        github: "",
        demo: "",
        live: "",
    },
    {
        name: "Social Media Api",
        image: SocialMedia
    },
    {
        name: "eCommerce Backend",
        image: eCommerce
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