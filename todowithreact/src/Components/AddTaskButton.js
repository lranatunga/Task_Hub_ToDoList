// import AddTaskPopup from './AddTaskPopup'
// import { useState } from 'react'
import TaskStatus from './TasksStatus'


function AddTaskButton (props) {


return(
    <div className='project-summery'>
    <TaskStatus class='project-board' status={props.projrctName}/>
    <TaskStatus class='count-new-task' status={props.count} />
    <TaskStatus class='count-inprogress' status={props.countIn} />
    <TaskStatus class='count-completed' status={props.countComplete} />
    <button className='add-new-task' onClick={props.handleAddNewTasksPopup}>Add New Task</button>
    
    </div>
)

}
export default AddTaskButton



    // const [isOpen, setIsOpen] = useState(false)
    // function handlePopup (){
    //     setIsOpen(!isOpen)
    // }
    // return(
    // <div>
    //     <button className="add-new-task" 
    //     onClick={handlePopup}> 
    //     Add New Task
    // </button>
    // {isOpen && <AddTaskPopup />}
    // </div>
    // )