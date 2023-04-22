
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ItemBoard from "./ItemBoard";
import TaskStatus from "./TasksStatus";
import { useState } from "react";

function DragAndDrop(props) {
  const { taskList, setTaskList, projectName } = props;
  const [taskCount, setTaskCount] = useState(0);
  const [taskEditing, setTaskEditing] = useState('');
  const [editedTaskName, setEditedTaskName] = useState("");
  // const [projectName, setProjectName] = useState('');
  
  const updateTaskCount = (droppableId) => {
    const assignCount = taskList.filter((task) => task.taskStatus === "Assign" && task.projectName === projectName).length;
    const inProgressCount = taskList.filter((task) => task.taskStatus === "In progress" && task.projectName === projectName).length;
    const completedCount = taskList.filter((task) => task.taskStatus === "Completed" && task.projectName === projectName).length;

    console.log('assignCount', assignCount, "inProgressCount:", inProgressCount, "completedCount:", completedCount)

    switch (droppableId) {
      case "new-tasks":
        setTaskCount({ ...taskCount, assign: assignCount });
       
        break;
      case "in-progress":
        setTaskCount({ ...taskCount, inProgress: inProgressCount });
        props.setCountIn(inProgressCount);
        

        break;
      case "completed-tasks":
        setTaskCount({ ...taskCount, completed: completedCount });
        props.setCountComplete(completedCount);

        break;
      default:
        break;
    }
    if (taskCount.inProgress > inProgressCount && droppableId !== "in-progress") {
      props.setCountIn(inProgressCount);
    }
  };

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
            return { ...task, taskStatus: "In progress" };
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
    updateTaskCount(destination.droppableId);
  };


  function deleteAddedTasks(taskID) {
    const newTaskList = JSON.parse(localStorage.getItem('taskBoard')) || [];
    const index = newTaskList.findIndex(task => task.taskId === taskID);
    if (index !== -1) {
      newTaskList.splice(index, 1);
      setTaskList(newTaskList); 
      localStorage.setItem('taskBoard', JSON.stringify(newTaskList));
    }
  }

  console.log('DnD runs tasklist is', taskList)
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bottom-section">
        <div className="section-newTasks">
          <TaskStatus class={"new-task-boards"} status={"New Tasks"}  count={
                    taskList
                      ? taskList.filter(
                          (task) => task.projectName === projectName && task.taskStatus === "Assign"
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
               
                {taskList &&
                  taskList
                    .filter((task) =>task.projectName === projectName && task.taskStatus === "Assign" )
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
                              handleDelete={() => deleteAddedTasks(task.taskId)}
                              handleInputChange={task.handleInputChange}
                              editedTaskName={editedTaskName}
                              setEditedTaskName={setEditedTaskName}
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
   <TaskStatus  class={'inprogress-boards'}status={'In progress'} />
                  <Droppable droppableId="in-progress">
               {(provided) => (
                  <div
                    className='task-board in-progress'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {taskList && taskList
                      .filter((task) => task.taskStatus === "In progress" && task.projectName === projectName)
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
                                handleDelete={() => deleteAddedTasks(task.taskId)}

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
                      .filter((task) => task.taskStatus === "Completed" && task.projectName === projectName )
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
                                handleDelete={() => deleteAddedTasks(task.taskId)}
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