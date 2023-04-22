import React, { useState } from "react";
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom"


function Sidebar(props) {
  const [showForm, setShowForm] = useState(false);
  const [projectName, setProjectName] = useState('')
  const [projectList, setProjectList]= useState(JSON.parse(localStorage.getItem('projectList'))||[]);

  function handleFormSubmit(event) {
    event.preventDefault();
    const newProject = {
      ProjectId: uuidv4(),
      projectName: projectName,
    };
    const updatedProjectList = [...projectList, newProject];
    setProjectList(updatedProjectList);
    localStorage.setItem("projectList", JSON.stringify(updatedProjectList));
    setShowForm(false);
    setProjectName ('')
  }



  function handleDeleteProject(projectName) {
    const newProjects = JSON.parse(localStorage.getItem('projectList'))||[];

    const index = newProjects.findIndex(project => project.projectName=== projectName);
   
    if (index !== -1) {
      newProjects.splice(index, 1);
      setProjectList(newProjects);

    localStorage.setItem('projectList', JSON.stringify(newProjects))
    }


  };

  return (
    <div className="sidebar">
    <div className="header">My Projects</div>
    <div className="project-list">
      {projectList.map((project, index) => (
      <Link  className="project-list-links" key={index}>
        <div className="project" key={index}>
        <li onClick={() => props.showProjectBoard(project.projectName)} className="project-links">{project.projectName}</li>

          <button
            className="delete-project"
            onClick={() => handleDeleteProject(project.projectName)}
          >
            Delete
          </button>
        </div>
        </Link>
      ))}
    </div>
    <div className="buttons">
      <button
        className="add-project"
        onClick={() => setShowForm(true)}>
        Add Project
      </button>
    </div>
    {showForm && (
  <form onSubmit={handleFormSubmit}>
    <input
      type="text"
      placeholder="Enter project name"
      value={projectName}
      onChange={(event) => setProjectName(event.target.value)}
    />
    <button onClick={handleFormSubmit} type="submit">Create project</button>
  </form>
)}
  </div>
);
}


export default Sidebar;
