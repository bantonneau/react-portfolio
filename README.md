# React Portfolio

## Overview

This project showcases an individual portfolio website developed using React, `react-router-dom`, and Material UI. The portfolio is deployed and can be accessed at [www.AntonneauWebDev.com](http://www.AntonneauWebDev.com).

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

### `Footer.js`
This component displays the footer of the portfolio website. It includes links to the LinkedIn profile, email, and GitHub repository of the portfolio owner.

```jsx
<div className='socialMedia'>
  <Link to="https://www.linkedin.com/in/benantonn/" target='_blank'>
    <LinkedIn />
  </Link>
  ...
</div>
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
```
REACT-PORTFOLIO
|
+--- assets
|    +-- ecommercebackend.png
|    +-- employeetracker.png
|    +-- jobboard.png
|    +-- laptop.jpg
|    +-- notetaker.png
|    +-- portfolio.ong
|    +-- socialmediaapi.png
+--- components
|    +-- Footer.js
|    +-- NavBar.js
|    +-- ProjectItem.js
|    +-- SoftSkills.js
|    +-- TechnicalSkills.js
+--- helpers
|    +-- projectList.js
+--- pages
|    +-- Home.js
|    +-- ProjectDisplay.js
|    +-- Projects.js
|    +-- Resume.js
+--- styles
|    +-- Footer.css
|    +-- Home.css
|    +-- NavBar.css
|    +-- ProjectDisplay.css
|    +-- Projects.css
+--- App.js
+--- index.js
+--- App.css
+--- reportWebVitals.js
```

## License
This project is licensed under the MIT License.

## Contact
[Bennett Antonneau](mailto:benantonn@gmail.com)

## Acknowledgments
- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
