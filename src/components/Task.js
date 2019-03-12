import React from "react";
import style from "./Task.css";

const Task = props =>
    <div className={style.Task}>
        <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
            <input className={style.FirstInput} placeholder={props.name}/>
            <button className={style.Button} onClick={() => props.deleteTask(props.id)}>Delete</button>
        </div>
        <input className={style.SecondInput} placeholder={props.content}/>
    </div>

export default Task;