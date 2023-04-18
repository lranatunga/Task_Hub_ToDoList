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



// function CompletedTasks({ taskList}) {
//     const completedTasks = taskList.filter((task) => task.taskStatus === 'Completed');
//     return (
//       <div className="section-completedTasks">
//         <TaskStatus class={'completed-task-boards'} status={'Completed Tasks'} />
//         {completedTasks.map((task, index) => (
//           <ItemBoard key={index}
//           id={index + 1} 
//           taskName={task.taskName}
//           taskDescription={task.description}
//           dueDate={task.dueDate}
//           handleDelete={task.deleteAddedTasks } />
//         ))}
//       </div>
//     );
//   }

//   export default CompletedTasks

