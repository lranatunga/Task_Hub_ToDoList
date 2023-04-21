import React, { useState } from "react";
import "./SideBar.css";

function Sidebar() {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (projectName) => {
    setProjects([...projects, projectName]);
  };

  const handleDeleteProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  return (
    <div className="sidebar">
      <div className="header">My Projects</div>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            {project}
            <button
              className="delete-project"
              onClick={() => handleDeleteProject(index)}
            >
              Delete
            </button>
          </div>
        ))}
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
