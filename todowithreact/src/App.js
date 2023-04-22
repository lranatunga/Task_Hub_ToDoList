import React, { useState, useEffect} from "react";
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
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  const [isProjectClick, setIsProjectClick] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [taskName, setTaskName] = useState('')
  const [projectName, setProjectName] = useState('');

  const [taskDescription, setTaskDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [id ,  setId] = useState (1)
  const [taskList, setTaskList] = useState (
   JSON.parse(localStorage.getItem('taskBoard'))||[])


  let assignStatus = JSON.parse(localStorage.getItem('taskBoard'))||[]
  const assignCount = assignStatus.filter(task => task.taskStatus === 'Assign' && task.projectName === projectName).length;
  const [count, setCount] = useState(assignStatus.length > 0 ? assignCount : 0)

  const inProgressCount = assignStatus.filter(task => task.taskStatus === 'In progress' && task.projectName === projectName).length;

  const [countIn, setcountIn] = useState(inProgressCount > 0 ? inProgressCount : 0)

  const completedCount = assignStatus.filter(task => task.taskStatus === 'Completed' && task.projectName === projectName).length;
  const [countComplete, setcountComplete] = useState(completedCount > 0 ? completedCount : 0)


  


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
            projectName:projectName,
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
        setTaskName('')
        setTaskDescription('')
        setDueDate('')
        setId (id + 1)

  }
  function setCountIn (){
    setcountIn(countIn + 1)
  }

  function setCountComplete() {

    setcountComplete(countComplete + 1)
  }
  
  function handleProjectBoardDisplay(projectName) {
    setIsProjectClick(true);
    const projectNameList = JSON.parse(localStorage.getItem('projectList'));
    const selectedProject = projectNameList.find(project => project.projectName === projectName);
    setProjectName(selectedProject ? selectedProject.projectName : '');
    console.log(selectedProject);
  }
  
  
  console.log('inProgressCount:', inProgressCount, " completedCount:", completedCount)
 

  return (
    <BrowserRouter>
    <div className="App">
      <NavigationBar />
      <div className='main'>
        <div className='left-section'>
        <SideBar
                showProjectBoard={handleProjectBoardDisplay}/>
        </div>
        {isProjectClick && 
      
        <div className='right-Section'>
          
              <div className='top-section'>
             
                  <AddTaskButton 
                                count={assignCount}
                                 countIn={inProgressCount} 
                                 countComplete={completedCount}
                                 projectName={projectName}
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
          <DragAndDrop  taskList={taskList} 
                        setTaskList={setTaskList} 
                        setCountIn={setCountIn}
                        setCountComplete={setCountComplete}
                        projectName={projectName}
  
          />
        </div>

    </div>
    }

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

