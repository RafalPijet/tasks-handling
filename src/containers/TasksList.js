import React from "react";
import Task from "../components/Task";

const TasksList = props => props.data.map(task => <Task deleteTask={props.deleteTask} id={task.id} key={task.id} name={task.title} content={task.content}/>);

export default TasksList;