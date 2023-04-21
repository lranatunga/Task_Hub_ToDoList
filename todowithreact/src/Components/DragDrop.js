import { useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ItemBoard from "./ItemBoard";
import TaskStatus from "./TasksStatus";
import { useState } from "react";
import EditTasks from "./EditTask";

function DragAndDrop(props) {
  const { taskList, setTaskList } = props;
  const [taskCount, setTaskCount] = useState(0);
  const [isEditing, setIsEditing] = useState(Array(taskList).fill(false));
  // console.log(isEditing)
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  

  useEffect(() => {
    setIsEditing(Array(taskList.length).fill(false));
  }, [taskList]);

  const updateTaskCount = (droppableId) => {
    const assignCount = taskList.filter((task) => task.taskStatus === "Assign").length;
    const inProgressCount = taskList.filter((task) => task.taskStatus === "In progress").length;
    const completedCount = taskList.filter((task) => task.taskStatus === "Completed").length;
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

 

  function handleEditing(taskID) {
    console.log(taskID)
    const selectEdit = taskList.findIndex((task) => task.taskId === taskID);
    console.log(selectEdit )
    const newIsEditing = true;
    console.log(newIsEditing)
    setIsEditing(newIsEditing);
  }
  
  function handleEditedInput(e, taskId) {
    const { name, value } = e.target;
    const index = taskList.findIndex((task) => task.taskId === taskId);
    const updatedTaskList = [...taskList];
    const updatedTask = { ...updatedTaskList[index] };
    updatedTask[name] = value;
    updatedTaskList[index] = updatedTask;
    setTaskList(updatedTaskList);
  }
  


  function handleDoneEditing(taskID) {
    const index = taskList.findIndex(task => task.taskId === taskID);
    const newIsEditing = [...isEditing];
    newIsEditing[index] = false;
    setIsEditing(newIsEditing);
  }

  function  handleEditedInput ( ){

  }


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
                             {isEditing [task.taskId] ? (
       
            
            <EditTasks
           
                editedTaskName={taskName}
                editedTaskDescription={taskDescription}
                dueDate={dueDate}
                handleInputChange={(e) => handleEditedInput(e, task.taskId)}
                handleEditSave={() => handleDoneEditing(task.taskId)}
            />

            ) : (
              <ItemBoard
                taskName={task.taskName}
                taskDescription={task.description}
                dueDate={task.dueDate}
                handleDelete={() => deleteAddedTasks(task.taskId)}
                handleEditing={() => handleEditing(task.taskId)}
              />
            )}
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
                      .filter((task) => task.taskStatus === "In progress")
                      .map((task, index) => (
                        <Draggable key={task.taskId} draggableId={task.taskId} index={index}>
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                          {isEditing[task.taskId] ? 
                          ( <EditTasks
                           editedTaskName={task.taskName}
                           editedTaskDescription={task.description}
                           dueDate={task.dueDate}
                           handleInputChange={(e) => handleEditedInput(e, task.taskId)}
                           handleEditSave={() => handleDoneEditing(task.taskId)}
                         />):(
                          <ItemBoard
                              taskName={task.taskName}
                              taskDescription={task.description}
                              dueDate={task.dueDate}
                              handleDelete={() => deleteAddedTasks(task.taskId)}
                              handleEditing = {handleEditing}
                            />)}
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
                          {isEditing[task.taskId] ? 
                            ( <EditTasks
                              editedTaskName={task.taskName}
                              editedTaskDescription={task.description}
                              dueDate={task.dueDate}
                              handleInputChange={(e) => handleEditedInput(e, task.taskId)}
                              handleEditSave={() => handleDoneEditing(task.taskId)}
                            />):(
                             <ItemBoard
                                 taskName={task.taskName}
                                 taskDescription={task.description}
                                 dueDate={task.dueDate}
                                 handleDelete={() => deleteAddedTasks(task.taskId)}
                                 handleEditing = {handleEditing}
                               />)}
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