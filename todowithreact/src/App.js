import React from 'react';
import './App.css';
import './Button.css';
import AddTaskButton from './Components/AddTaskButton';
import NewTaskBorad from './Components/NewTaskBoard';
import CompletedTasks from './Components/CompletedTasks';
import InProgress from './Components/InProgressTasks';
import { useState } from 'react';
import { useEffect } from 'react';
import AddTaskPopup from './Components/AddTaskPopup';
// import ItemBoard from './Components/ItemBoard';
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

  // const taskStatus ={
  //   assing:{
  //     name: 'Assign',
  //     items: tasks,
  //   },
  //   inProgress:{
  //     name:'In Progress',
  //     items: [],
  //   },
  //   completed:{
  //     name: 'Completed',
  //     task: [],
  //   }
  // }

 
  

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


   const deleteAddedTasks  = (id) =>{
 const updatedTasks = taskList.filter(task => task.id !== id);
  setTaskList(updatedTasks);
  localStorage.setItem('taskBoard', JSON.stringify(updatedTasks)); 
    setCount(count -1)
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
              <div className='bottom-section'>
                {/* <DragDropContext >
                  <Droppable droppableId="tasks"> */}
                      <NewTaskBorad deleteAddedTasks={deleteAddedTasks}
                                               />
                      <InProgress />
                      <CompletedTasks />
                  {/* </Droppable>
                </DragDropContext>   */}
              </div>
        </div>
      </div>
    </div>
  );
}

export default App;



