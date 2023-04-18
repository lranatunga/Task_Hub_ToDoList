import React from 'react';
import './App.css';
import './Button.css';
import AddTaskButton from './Components/AddTaskButton';
import { useState } from 'react';
// import { useEffect } from 'react';
import AddTaskPopup from './Components/AddTaskPopup';
import DragAndDrop from './Components/DragDrop';
import { v4 as uuidv4 } from 'uuid';

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

  return (
    <div className="App">
      {/* <Header /> */}
      <div className='main'>
        <div className='left-section'>

        </div>
        <div className='right-Section'>
              <div className='top-section'>
                  <AddTaskButton count={count}
                                 countIn={ 0} 
                                 countComplete={0}
                                 projrctName={'Create to do list'}
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
          <DragAndDrop  taskList={taskList} setTaskList={setTaskList}  />
        </div>


        </div>
      </div>
    </div>
  );
}

export default App;



