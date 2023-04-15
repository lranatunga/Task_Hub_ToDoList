// import ItemBoard from "./ItemBoard"
import TaskStatus from "./TasksStatus"


function NewTaskBorad ({ taskList }) {

    return(
        <div className="section-newTasks">
            <TaskStatus  class={'new-task-boards'}status={'New Tasks'} />
            {/* <div className="item-board">
        {taskList.map((task, index) => (
          <ItemBoard
            key={index}
            taskName={task.name}
            taskDescription={task.description}
            dueDate={task.dueDate}
            status={task.status}
          />
        ))}
        </div> */}
      </div>
    )
}
export default NewTaskBorad






