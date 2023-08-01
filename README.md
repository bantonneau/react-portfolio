# React Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
1. [Overview](#overview)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Key Features & Code Explanation](#key-features-&-code-explanation)
5. [Project Structure](#project-structure)
6. [License](#license)
7. [Contact](#contact)
8. [Acknowledgments](#Acknowledgments)


## Overview

This project showcases an individual portfolio website developed using React, `react-router-dom`, and Material UI. The portfolio is deployed and can be accessed at [www.AntonneauWebDev.com](http://www.AntonneauWebDev.com).


## Installation

To install and run this application locally, follow these steps:

1. Clone the repository to your local machine using `git clone https://github.com/your-username/your-repository.git`.
2. Navigate to the root directory of the cloned repository in your terminal and run `npm install` to install the necessary dependencies.
3. Once the installations are completed, run `npm start` to start the application on your local server.

## Usage

Visit the deployed application at [www.AntonneauWebDev.com](http://www.AntonneauWebDev.com) to view the portfolio. If running locally, the application will be accessible at `http://localhost:3000` after running the `npm start` command.

## Key Features & Code Explanation

### `Projects.js`
This file is a React component that maps over the `projectList` array imported from `ProjectList.js` helper file and creates a `ProjectItem` component for each project.

```jsx
{projectList.map((project, index) => {
  return <ProjectItem id={index} name={project.name} image={project.image} />
})}
```

### `Navbar.js`
This component handles the navigation throughout the website. It uses the `useState` and `useEffect` hooks from React to toggle the display of the navigation menu.

```jsx
const [expandNavbar, setExpandNavbar] = useState(false);
...
<button onClick={() => {
  setExpandNavbar((prev) => !prev);
}}>
```

The useEffect hook is used to close the expanded navigation menu when a new page is navigated to.

```jsx
useEffect(() => {
  setExpandNavbar(false)
}, [location])
```

### `ProjectItem.js`
This component displays individual project items on the Projects page. It uses the `useNavigate` hook from `react-router-dom` to navigate to the details page for each project. A `scrollToTop` function is defined and used to ensure that the page view starts at the top when navigating to a new page.

```jsx
const handleClick = () => {
  navigate("/project/" + id);
  scrollToTop();
};
...
<div className='projectItem' onClick={handleClick}>
```

### `SoftSkills.js`
This component maps over an array of soft skills and displays each skill.

```jsx
{softSkills.map((skill, index) => (
  <div className="skillTile" key={index}>
    {skill}
  </div>
))}
```

### `App.js`
This is the main React component. It uses React Router (`react-router-dom`) to switch between different pages/components of the website. The `Navbar` and `Footer` components are rendered outside of the `Routes` component so they are displayed on every page.

```jsx
<Router>
  <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/project/:id' element={<ProjectDisplay />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
  <Footer />
</Router>
```

## Project Structure

- `assets/` - Contains various images used in the project.
- `components/` - Houses all the React components used in the project such as `Footer.js`, `NavBar.js`, `ProjectItem.js`, `SoftSkills.js`, and `TechnicalSkills.js`.
- `helpers/` - Contains `ProjectList.js` which includes the list of projects to be displayed.
- `pages/` - Includes all the main pages of the website: `Home.js`, `ProjectDisplay.js`, `Projects.js`, and `Resume.js`.
- `styles/` - Houses all the CSS stylesheets for the various components.
- `App.js` - The main entry point of the React application.
- `index.js` - The main entry point of the project, renders the `App.js` component.

## License
This project is licensed under the MIT License.

## Contact
[Bennett Antonneau](mailto:benantonn@gmail.com)

## Acknowledgments
- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)



