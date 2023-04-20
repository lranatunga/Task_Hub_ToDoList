
// import {useState} from 'react'
// import editImage from '../images/edit.png';
// import saveImage from '../images/save.png'
// import DeleteButton from './Delete';
// import { v4 as uuidv4 } from 'uuid';

// function ItemBoard(props) {

//   const [taskEditing, setTaskEditing] = useState(null)
//   const [saveEditing, setSaveEditing] = useState('')
//   const [taskList, setTaskList] = useState(
//     JSON.parse(localStorage.getItem('taskBoard')) || []
//   )

//   const handleEditing = () => {
//     setTaskEditing(props.id);
//   }

//   const handleEditSave = () => {
//     const editedTaskList = taskList.map(task => {
//       if (task.taskID === taskEditing) {
//         return {
//           id: task.taskID,
//           taskName: saveEditing.taskName || task.taskName,
//           taskDescription: saveEditing.taskDescription || task.taskDescription,
//           dueDate: saveEditing.dueDate || task.dueDate
//         };
//       } else {
//         return task;
//       }
//     });
//     const updatedTaskList = [...taskList, editedTaskList];
//     setTaskList(updatedTaskList);
//     localStorage.setItem('taskBoard', JSON.stringify(updatedTaskList));
//     setTaskEditing(null);
//     setSaveEditing({});
//   }

//   return (  
//     <div className="item-board">
//       {props.id === taskEditing ? (
//         <>
//           <div style={{display:'flex', justifyContent:'flex-end',margin:'0'}}>
//             <img className='save' src={saveImage} alt='save' onClick={handleEditSave} />
//           </div>
//           <p style={{display:'flex', justifyContent:'flex-start',margin:'0'}}>Task Name : 
//             <input type='text'
//               value={saveEditing.taskName || props.taskName}
//               onChange={(e) => setSaveEditing({...saveEditing, taskName: e.target.value})} />
//           </p>
//           <p style={{display:'flex', justifyContent:'flex-start',margin:'0'}}>Description : 
//             <input type='text'
//               value={saveEditing.taskDescription || props.taskDescription}
//               onChange={(e) => setSaveEditing({...saveEditing, taskDescription: e.target.value})} />
//           </p>
//           <div className='due'>
//             <p style={{display:'flex', justifyContent:'flex-start',margin:'0'}}>Due Date: 
//               <input type="date"
//                 value={saveEditing.dueDate || props.dueDate}
//                 onChange={(e) => setSaveEditing({...saveEditing, dueDate: e.target.value})} />
//             </p>
//           </div>
//           <DeleteButton handleDelete={() => props.handleDelete(props.id)} />
//         </>
//       ) : (
//         <>
//           <div style={{display:'flex', justifyContent:'flex-end',margin:'0'}}>
//             <img className='edit' src={editImage} alt='edit' onClick={handleEditing} />
//           </div>
//           <p style={{display:'flex', justifyContent:'flex-start',margin:'0'}}>Task Name : {props.taskName}</p>
//           <p style={{display:'flex', justifyContent:'flex-start',margin:'0'}}>Description : {props.taskDescription}</p>
//           <div className='due'>
//             <p style={{display:'flex', justifyContent:'flex-start',margin:'0'}}>Due Date: {props.dueDate} </p>
//           </div>
//           <DeleteButton handleDelete={() => props.handleDelete(props.id)} />
//         </>
//       )}
//     </div>
//   )
// }

// export default ItemBoard;




import dragImage from '../images/drag.png';
import editImage from '../images/edit.png';
import DeleteButton from './Delete';

function ItemBoard(props) {
  return (
    <div className="item-board">
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '0' }}>
        <img className='drag' src={dragImage} alt="drag" />
        <img className='edit' src={editImage} alt='edit' />
      </div>
      <p style={{ display: 'flex', justifyContent: 'flex-start', margin: '0' }}>Task Name : {props.taskName}</p>
      <p style={{ display: 'flex', justifyContent: 'flex-start', margin: '0' }}>Description : {props.taskDescription}</p>
      <div className='due'>
        <p style={{ display: 'flex', justifyContent: 'flex-start', margin: '0' }} type='date'>Due Date: {props.dueDate} <input type="date" />  </p>
      </div>
      <DeleteButton onClick={() => props.handleDelete(props.taskID)} />
    </div>
  )
}

export default ItemBoard


