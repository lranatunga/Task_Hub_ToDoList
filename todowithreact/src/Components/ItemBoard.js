import dragImage from '../images/drag.png';
import editImage from '../images/edit.png';
import DeleteButton from './Delete';

function ItemBoard(props) {


  return (
    
            <div className="item-board">
              <div style={{display:'flex', justifyContent:'flex-end',margin:'0',border:'1px solid red'}}>
                <img className='drag' src={dragImage} alt="drag"/>
                <img className='edit'src={editImage} alt ='edit'/>
              </div>
              <p style={{display:'flex', justifyContent:'flex-start',margin:'0',border:'1px solid red'}}>Task Name : {props.taskName}</p>
              <p style={{display:'flex', justifyContent:'flex-start',margin:'0',border:'1px solid red'}}>Description : {props.taskDescription}</p>
              <div className='due'>
                <p style={{display:'flex', justifyContent:'flex-start',margin:'0',border:'1px solid red'}}type='date'>Due Date: {props.dueDate} <input type="date"/>  </p>
              </div>
              < DeleteButton  handleDelete={() => props.handleDelete(props.index)} />
            </div>
           
    
  )
}

export default ItemBoard

