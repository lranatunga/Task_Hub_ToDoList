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


// function InProgress({ taskList}) {
//     const inProgressTasks = taskList.filter((task) => task.taskStatus === 'InProgress');
//     return (
//       <div className="section-inProgress">
//         <TaskStatus class={'inProgress-task-boards'} status={'In Progress'} />
//         {inProgressTasks.map((task, index) => (
//           <ItemBoard key={index}
//           id={index + 1} 
//           taskName={task.taskName}
//           taskDescription={task.description}
//           dueDate={task.dueDate}
//           handleDelete={task.deleteAddedTasks }/>
//         ))}
//       </div>
//     );
//   }

//   export default InProgress


