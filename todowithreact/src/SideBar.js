import React, { useState } from "react";
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'


function Sidebar() {
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projectList'))||[]);

  const handleAddProject = (projectName) => {
    const updatedProjectList =([...projects, projectName]);
    setProjects (updatedProjectList)
    localStorage.setItem('projectList', JSON.stringify(updatedProjectList))
  };

  const handleDeleteProject = (index) => {
    const newProjects = JSON.parse(localStorage.getItem('projectList'))||[];
    newProjects.splice(index, 1);
    setProjects(newProjects);
    localStorage.setItem('projectList', JSON.stringify(newProjects))
  };

  return (
    <div className="sidebar">
      <div className="header">My Projects</div>
      <div className="project-list">
      <Router>
        {projects.map((project, index) => (
          <div className="project" key={index}>
              
              <NavLink to={`/projects/${project}`}>{project}</NavLink>
            <button
              className="delete-project"
              onClick={() => handleDeleteProject(index)}
            >
              Delete
            </button>
          </div>
        ))}
        </Router>
      </div>
      <div className="buttons">
        <button
          className="add-project"
          onClick={() => {
            const projectName = prompt("Enter the project name:");
            if (projectName) {
              handleAddProject(projectName);
            }
          }}
        >
          Add Project
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
