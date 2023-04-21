import React, { useState, useEffect } from "react";
import './App.css';
import './Lakmali.css';
import "./SideBar.css";
import './NavigationBar.css';
import AddTaskButton from './Components/AddTaskButton';
import AddTaskPopup from './Components/AddTaskPopup';
import DragAndDrop from './Components/DragDrop';
import { v4 as uuidv4 } from 'uuid';
import NavigationBar from './NavigationBar';
import SideBar from './SideBar';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [id ,  setId] = useState (1)
  const [taskList, setTaskList] = useState (
   JSON.parse(localStorage.getItem('taskBoard'))||[])


  let assignStatus = JSON.parse(localStorage.getItem('taskBoard'))||[]
  const assignCount = assignStatus.filter(task => task.taskStatus === 'Assign').length;
  const [count, setCount] = useState(assignStatus.length > 0 ? assignCount : 0)

  const inProgressCount = assignStatus.filter(task => task.taskStatus === 'In progress').length;
  const [countIn, setcountIn] = useState(inProgressCount.length > 0 ? inProgressCount : 0)

  const completedCount = assignStatus.filter(task => task.taskStatus === 'Completed').length;
  const [countComplete, setcountComplete] = useState(completedCount.length > 0 ? completedCount : 0)


  


  const handleAddNewTasksPopup = () => {
    setIsOpen (true)
  }

  const handleDelete = () =>{
    setIsOpen(false)
  }


  const handleAddTask = () =>{
        setIsOpen(false)
       

        const newTask = {
            id :id,
            taskId: uuidv4(),
            taskName: taskName,
            description: taskDescription,
            dueDate: dueDate,
            taskStatus:'Assign'
        };
        const updatedTaskList = [...taskList, newTask];
        setTaskList(updatedTaskList);
        localStorage.setItem('taskBoard', JSON.stringify(updatedTaskList));
        setIsOpen(false)

        setCount(count + 1)
        setId (id + 1)

  }
  function setCountIn (){
    setcountIn(countIn + 1)
  }

  function setCountComplete() {

    setcountComplete(countComplete + 1)
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'taskName') {
      setTaskName(value);
    } else if (name === 'taskDescription') {
      setTaskDescription(value);
    } else if (name === 'dueDate') {
      setDueDate(value);
    }
  };


  
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
      <div className='main'>
        <div className='left-section'>
        <SideBar
            projects={projects}
            onAddProject={handleAddProject}
            onDeleteProject={handleDeleteProject}
          />
        </div>
        <div className='right-Section'>
              <div className='top-section'>
                  <AddTaskButton 
                                count={assignCount}
                                 countIn={inProgressCount} 
                                 countComplete={completedCount}
                                 projectName={'Create to do list'}
                                 handleAddNewTasksPopup= {handleAddNewTasksPopup}
                                  />
              </div>
              {isOpen && <AddTaskPopup isOpen={isOpen}
                            handleClose={()=>setIsOpen(false)}
                            handleDelete={handleDelete}
                            handleAddTask={handleAddTask}
                            taskName={taskName}
                            setTaskName={setTaskName}
                            taskDescription={taskDescription}
                            setTaskDescription={setTaskDescription}
                            dueDate={dueDate}
                            setDueDate={setDueDate}  /> }
          
        <div>
          <DragAndDrop  taskList={taskList} setTaskList={setTaskList} setCountIn={setCountIn}
  setCountComplete={setCountComplete}
  handleInputChange={handleInputChange} />
        </div>

      
      {/* <div className="content">
        <div> */}

      {/* other components */}
    {/* </div> */}
        
      {/* </div> */}
    </div>
      </div>
    </div>
  );
}

export default App;



