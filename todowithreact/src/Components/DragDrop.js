import { DragDropContext, Draggable,  Droppable } from "react-beautiful-dnd";
import ItemBoard from "./ItemBoard";


function DragAndDrop(){
     let taskList =JSON.parse(localStorage.getItem('taskBoard'))||[]
    return(
        <DragDropContext>
  <div className='bottom-section'>
    <Droppable droppableId="new-tasks">
      {(provided) => (
        <div
          className='task-board new-tasks'
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {taskList
            .filter((task) => task.taskStatus === "Assign")
            .map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
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

    <Droppable droppableId="in-progress">
      {(provided) => (
        <div
          className='task-board in-progress'
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {taskList
            .filter((task) => task.taskStatus === "In Progress")
            .map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
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

    <Droppable droppableId="completed-tasks">
      {(provided) => (
        <div
          className='task-board completed-tasks'
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {taskList
            .filter((task) => task.taskStatus === "Completed")
            .map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
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
    </DragDropContext>
    )
}

export default DragAndDrop