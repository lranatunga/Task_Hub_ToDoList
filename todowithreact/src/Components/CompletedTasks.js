import ItemBoard from "./ItemBoard"
import TaskStatus from "./TasksStatus"
function CompletedTasks () {
    return(
        <div className="section-completed">
            <TaskStatus  class={'completed-boards'}status={'Completed'} />
            <ItemBoard />
        </div>
    )
}
export default CompletedTasks