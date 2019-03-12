import React from "react";
import Task from "../components/Task";

const TasksList = props => props.data.map(task => <Task changeStyle={props.changeStyle} inputStyle={props.inputStyle}
                                                        deleteTask={props.deleteTask} id={task.id} key={task.id}
                                                        name={task.title} content={task.content} onName={props.onName}
                                                        onContent={props.onContent} onID={props.onID} updateTask={props.updateTask}/>);

export default TasksList;