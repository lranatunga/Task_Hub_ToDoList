import ItemBoard from "./ItemBoard"
import TaskStatus from "./TasksStatus"
function InProgressTasks () {
    return(
        <div className="section-inprogress">
            <TaskStatus  class={'inprogress-boards'}status={'In Progress'} />
 
  <ItemBoard />

        </div>
    )
}
export default InProgressTasks