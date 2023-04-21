import saveImage from '../images/save.png';

function EditTasks(props) {


    return(
    <div  className="edit-item-board">
          <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '0' }}>
            <img className='save' src={saveImage} alt='save' onClick={props.handleEditSave} />
          </div>
          <p style={{ display: 'flex', justifyContent: 'flex-start', margin: '0' }}>Task Name :
            <input type='text'
              value={props.editedTaskName}
              onChange={props.handleInputChange}/>
          </p>
          <p style={{ display: 'flex', justifyContent: 'flex-start', margin: '0' }}>Description :
            <input type='text'
              value={props.editedTaskDescription}
              onChange={props.handleInputChange} />
          </p>
          <div className='due'>
            <p style={{ display: 'flex', justifyContent: 'flex-start', margin: '0' }}>Due Date:
              <input type="date"
                value={props.dueDate}
                onChange={props.handleInputChange} />
            </p>
          </div>



      </div>
    )
}
export default EditTasks