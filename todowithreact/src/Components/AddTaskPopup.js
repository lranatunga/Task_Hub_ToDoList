// import { useState } from "react"
// import { ItemBoard } from "./ItemBoard";
// import deleteImsge from "../images/delete.png"
import add from '../images/add.png';
import DeleteButton from './Delete';


export default function AddTaskPopup (props){




    return (
        <div className="new-task-popup">
              <form className="new-task-form">
                    <DeleteButton handleDelete={props.handleDelete}/>
                <p className="task-name">Task Name: 
                <input 
                    type="text"
                    value={props.taskName}
                    onChange={(e) => props.setTaskName(e.target.value)}
                />
                </p>
                <div className="task-description">
                    <p>Description:</p> 
                    <textarea
                    value={props.taskDescription}
                    onChange={(e) => props.setTaskDescription(e.target.value)}></textarea>
                </div>
                <p className="due-date">Due Date: <input type="date"
                    value={props.dueDate}
                    onChange={(e) => props.setDueDate(e.target.value)}/></p>
                <img className="add-img"
                    src={add} 
                    alt="add" 
                    onClick={props.handleAddTask}/>
            </form>

        </div>
    )
}

    // const [open, setOpen] = useState(true)
    // const [taskName, setTaskName] = useState('')
    // const [taskDescription, setTaskDescription] = useState('')
    // const [dueDate, setDueDate] = useState('')
    // const [taskList, setTaskList] = useState (
    //  JSON.parse(localStorage.getItem('taskBoard'))||[])

    //  function handleAddTask () {
        // setOpen(false)
        // setCount(count + 1)

        // const newTask = {
        //     name: taskName,
        //     description: taskDescription,
        //     dueDate: dueDate,
        //     status:'Assign'
        // };
        // const updatedTaskList = [...taskList, newTask];
        // setTaskList(updatedTaskList);
        // localStorage.setItem('taskBoard', JSON.stringify(updatedTaskList));
        // setOpen(false)

        // return (
        //     <div>
        //         {updatedTaskList.map((tasks,Index) =>(
        //             <ItemBoard/>
        //         ))}
        //     </div>
          
        // )

    // } 


    // return(
    //     open &&
    //     <div className="new-task-popup">
    //         <form className="new-task-form">
    //             <img className="delete-img" 
    //                 src={deleteImsge} 
    //                 alt="delete" 
    //                 onClick={() => setOpen(false)}/>
    //             <p className="task-name">Task Name: 
    //             <input type="text" 
    //             value={taskName}
    //             onChange={e => setTaskName(e.target.value)}/>
    //             </p>
    //             <div className="task-description">
    //                 <p>Description:</p> 
    //                 <textarea
    //                 value={taskDescription}
    //                 onChange={e => setTaskDescription(e.target.value)}></textarea>
    //             </div>
    //             <p className="due-date">Due Date: <input type="date"
    //              value={dueDate}
    //              onChange={e => setDueDate(e.target.value)}/></p>
    //             <img className="add-img"
    //                 src={add} 
    //                 alt="add" 
    //                 onClick={handleAddTask}/>
    //         </form>
                        
    //     </div>
    // )