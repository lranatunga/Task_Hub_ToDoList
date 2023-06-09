import ItemBoard from "./ItemBoard"
import TaskStatus from "./TasksStatus"


function NewTaskBoard () {

    const taskList = JSON.parse(localStorage.getItem('taskBoard'))||[]
    
    return(
        <div className="section-newTasks">
            <TaskStatus  class={'new-task-boards'}status={'New Tasks'} />
            {taskList.map((taskList,index) =>{
                return <ItemBoard 
                            key={index}
                            id={index + 1} 
                            taskName={taskList.taskName}
                            taskDescription={taskList.description}
                            dueDate={taskList.dueDate}
                            handleDelete={taskList.deleteAddedTasks}
                           />
            })}

         
      
      </div>
    )
}
export default NewTaskBoard
