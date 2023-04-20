
import add from '../images/add.png';
import DeleteButton from './Delete';


export default function AddTaskPopup (props){




    return (
        <div className="new-task-popup">
              <form className="new-task-form">
                    <DeleteButton onClick={props.handleDelete}/>
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

  