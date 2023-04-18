// import { DragDropContext, Draggable,  Droppable } from "react-beautiful-dnd";
// import ItemBoard from "./ItemBoard";
// import TaskStatus from "./TasksStatus";
// import { useState } from "react";


// function DragAndDrop({ taskList, setTaskList }){

//   // const [taskList, setTaskList] = useState(
//   //   JSON.parse(localStorage.getItem('taskBoard')) || []
//   // );

//   const onDragEnd = (result) => {
//     const { source, destination } = result;
//   setTaskList(updatedTaskList);
//     localStorage.setItem('taskBoard', JSON.stringify(updatedTaskList));
  
//     if (!destination) {
//       return;
//     }
  
//     const taskId = result.draggableId;
//     const updatedTaskList = taskList.map((task) => {
//       if (task.taskId === taskId) {
//         switch (destination.droppableId) {
//           case 'new-tasks':
//             return { ...task, taskStatus: 'Assign' };
//           case 'in-progress':
//             return { ...task, taskStatus: 'In Progress' };
//           case 'completed-tasks':
//             return { ...task, taskStatus: 'Completed' };
//           default:
//             return task;
//         }
//       } else {
//         return task;
//       }
//     });
  
//     setTaskList(updatedTaskList);
//     localStorage.setItem('taskBoard', JSON.stringify(updatedTaskList));
//   };
  
    

//     return(
//         <DragDropContext onDragEnd={onDragEnd}>
//             <div className='bottom-section'>
//               <div className="section-newTasks">
//               <TaskStatus  class={'new-task-boards'}status={'New Tasks'} />
//               <Droppable droppableId="new-tasks">
//                 {(provided) => (
//                   <div 
//                     className='task-board new-tasks'
//                     {...provided.droppableProps}
//                     ref={provided.innerRef}
//                   >
//                        <TaskStatus status='Assign' count={taskList.filter((task) => task.taskStatus === 'Assign').length} />
            
//                     {taskList
//                       .filter((task) => task.taskStatus === "Assign")
//                       .map((task, index) => (
//                         <Draggable key={task.taskId} draggableId={task.taskId} index={index}>
//                           {(provided) => (
//                             <div
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               ref={provided.innerRef}
//                             >
                              
//                               <ItemBoard
//                                 taskName={task.taskName}
//                                 taskDescription={task.description}
//                                 dueDate={task.dueDate}
//                               />
//                             </div>
//                           )}
//                         </Draggable>
//                       ))}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//               </div>
                          
//               <div className="section-inprogress">
//               <TaskStatus  class={'inprogress-boards'}status={'In Progress'} />
//               <Droppable droppableId="in-progress">
//                 {(provided) => (
//                   <div
//                     className='task-board in-progress'
//                     {...provided.droppableProps}
//                     ref={provided.innerRef}
//                   >
//                     {taskList
//                       .filter((task) => task.taskStatus === "In Progress")
//                       .map((task, index) => (
//                         <Draggable key={task.taskId} draggableId={task.taskId} index={index}>
//                           {(provided) => (
//                             <div
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               ref={provided.innerRef}
//                             >
//                               <ItemBoard
//                                 taskName={task.taskName}
//                                 taskDescription={task.description}
//                                 dueDate={task.dueDate}
//                               />
//                             </div>
//                           )}
//                         </Draggable>
//                       ))}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//               </div>
                          
                          
//               <div className="section-completed">
//               <TaskStatus  class={'completed-boards'}status={'Completed'} />
//               <Droppable droppableId="completed-tasks">
//                 {(provided) => (
//                   <div
//                     className='task-board completed-tasks'
//                     {...provided.droppableProps}
//                     ref={provided.innerRef}
//                   >
//                     {taskList
//                       .filter((task) => task.taskStatus === "Completed")
//                       .map((task, index) => (
//                         <Draggable key={task.taskId} draggableId={task.taskId} index={index}>
//                           {(provided) => (
//                             <div
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               ref={provided.innerRef}
//                             >
//                               <ItemBoard
//                                 taskName={task.taskName}
//                                 taskDescription={task.description}
//                                 dueDate={task.dueDate}
//                               />
//                             </div>
//                           )}
//                         </Draggable>
//                       ))}
//                     {provided.placeholder}
                          
//                     </div>
//                 )}
//               </Droppable>
//               </div>
//               </div>
//           </DragDropContext>
//     )
// }

// export default DragAndDrop




import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ItemBoard from "./ItemBoard";
import TaskStatus from "./TasksStatus";
import { useState } from "react";

function DragAndDrop({ taskList, setTaskList }) {
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const taskId = result.draggableId;
    const updatedTaskList = taskList.map((task) => {
      if (task.taskId === taskId) {
        switch (destination.droppableId) {
          case "new-tasks":
            return { ...task, taskStatus: "Assign" };
          case "in-progress":
            return { ...task, taskStatus: "In Progress" };
          case "completed-tasks":
            return { ...task, taskStatus: "Completed" };
          default:
            return task;
        }
      } else {
        return task;
      }
    });

    setTaskList(updatedTaskList);
    localStorage.setItem("taskBoard", JSON.stringify(updatedTaskList));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bottom-section">
        <div className="section-newTasks">
          <TaskStatus class={"new-task-boards"} status={"New Tasks"}  count={
                    taskList
                      ? taskList.filter(
                          (task) => task.taskStatus === "Assign"
                        ).length
                      : 0
                  }/>
          <Droppable droppableId="new-tasks">
            {(provided) => (
              <div
                className="task-board new-tasks"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {/* s */}

                {taskList &&
                  taskList
                    .filter((task) => task.taskStatus === "Assign")
                    .map((task, index) => (
                      <Draggable
                        key={task.taskId}
                        draggableId={task.taskId}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <ItemBoard
                              taskName={task.taskName}
                              taskDescription={task.description}
                              dueDate={task.dueDate}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

                     <div className="section-inprogress">
   <TaskStatus  class={'inprogress-boards'}status={'In Progress'} />
                  <Droppable droppableId="in-progress">
               {(provided) => (
                  <div
                    className='task-board in-progress'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {taskList && taskList
                      .filter((task) => task.taskStatus === "In Progress")
                      .map((task, index) => (
                        <Draggable key={task.taskId} draggableId={task.taskId} index={index}>
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <ItemBoard
                                taskName={task.taskName}
                                taskDescription={task.description}
                                dueDate={task.dueDate}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              </div>
                          
                          
              <div className="section-completed">
              <TaskStatus  class={'completed-boards'}status={'Completed'} />
              <Droppable droppableId="completed-tasks">
                {(provided) => (
                  <div
                    className='task-board completed-tasks'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {taskList && taskList
                      .filter((task) => task.taskStatus === "Completed")
                      .map((task, index) => (
                        <Draggable key={task.taskId} draggableId={task.taskId} index={index}>
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <ItemBoard
                                taskName={task.taskName}
                                taskDescription={task.description}
                                dueDate={task.dueDate}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                          
                    </div>
                )}
              </Droppable>
              </div>
              </div>
          </DragDropContext>
    )
}

export default DragAndDrop