
import editImage from '../images/edit.png';
import DeleteButton from './Delete';

function ItemBoard(props) {
 

  return (
    <div className="item-board">
    
        <>
          <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '0' }}>
            <img className='edit' src={editImage} alt='edit' onClick={props.handleEditing} />
          </div>
          <p style={{ display: 'flex', justifyContent: 'flex-start', margin: '0' }}>Task Name : {props.taskName}</p>
          <p style={{ display: 'flex', justifyContent: 'flex-start', margin: '0' }}>Description : {props.taskDescription}</p>
          <div className='due'>
            <p style={{ display: 'flex', justifyContent: 'flex-start', margin: '0' }}>Due Date: {props.dueDate} </p>
          </div>
          <DeleteButton onClick={() => props.handleDelete(props.taskID)} />
        </>
     
    </div>
  );
}

export default ItemBoard


