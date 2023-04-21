function TaskStatus(props) {
    return(
        <button className={props.class}>{props.status} 
        {props.countStatus}
   </button>
    )
}

export default TaskStatus