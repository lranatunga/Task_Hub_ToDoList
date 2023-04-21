
import TaskStatus from './TasksStatus'


function AddTaskButton (props) {
    const { count, countIn, countComplete, projectName, handleAddNewTasksPopup } = props;

return(
    <div className='project-summery'>
    <TaskStatus class='project-board' status={projectName}/>
    <TaskStatus class='count-new-task' status='New Tasks : ' countStatus={count} />
    <TaskStatus class='count-inprogress' status='In Progress : ' countStatus={countIn} />
    <TaskStatus class='count-completed' status='Completed : ' countStatus={countComplete}/>
    <button className='add-new-task' onClick={handleAddNewTasksPopup}>Add New Task</button>
    
    </div>
)

}
export default AddTaskButton

