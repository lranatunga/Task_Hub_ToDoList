function TaskStatus(props) {
    return(
        <button className={props.class}> 
        {props.status}
   </button>
    )
}

export default TaskStatus