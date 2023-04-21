import React, { useState, useEffect } from "react";
import './App.css';
import NavigationBar from './NavigationBar';
import SideBar from './SideBar';

function App() {
  
  const [projects, setProjects] = useState([]);

  // Load project data from local storage on initial render
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    if (storedProjects) {
      setProjects(storedProjects);
    }
  }, []);

  // Save project data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleAddProject = (projectName) => {
    const newProject = { name: projectName };
    setProjects([...projects, newProject]);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };
  return (
    <div className="App">
      <NavigationBar />
      <div className="content">
        <div>
      <SideBar
      projects={projects}
      onAddProject={handleAddProject}
      onDeleteProject={handleDeleteProject}
      
      />
      {/* other components */}
    </div>
        
      </div>
    </div>
  );
}

export default App;