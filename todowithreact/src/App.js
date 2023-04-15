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
import ItemBoard from './Components/ItemBoard';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const [count, setCount] = useState(0)
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [taskList, setTaskList] = useState (
   JSON.parse(localStorage.getItem('taskBoard'))||[])


  const handleAddNewTasksPopup = () => {
    setIsOpen (true)
  }

  const handleDelete = () =>{
    setIsOpen(false)
  }


  const handleAddTask = () =>{
        setIsOpen(false)
        setCount(count + 1)

        const newTask = {
            name: taskName,
            description: taskDescription,
            dueDate: dueDate,
            status:'Assign'
        };
        const updatedTaskList = [...taskList, newTask];
        setTaskList(updatedTaskList);
        localStorage.setItem('taskBoard', JSON.stringify(updatedTaskList));
        setIsOpen(false)
  }

  useEffect(() => {
    const storedTaskList = JSON.parse(localStorage.getItem('taskBoard'));
    if (storedTaskList && Array.isArray(storedTaskList)) {
      setTaskList(storedTaskList);
    }
  }, []);


  return (
    <div className="App">
      {/* <Header /> */}
      <div className='main'>
        <div className='left-section'>

        </div>
        <div className='right-Section'>
              <div className='top-section'>
                  <AddTaskButton count={count} 
                                 countIn={'In Progress:'} 
                                 countComplete={'Completed:'}
                                 projrctName={'Create to do list'}
                                 handleAddNewTasksPopup= {handleAddNewTasksPopup} />
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
                <NewTaskBorad >
                
                <ItemBoard/>
              
              </NewTaskBorad> 
                  <InProgress />
                  <CompletedTasks />
              </div>
        </div>
      </div>
    </div>
  );
}

export default App;



