import React from "react";
import style from "./Task.css";

const Task = props =>
    <div className={style.Task}>
        <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
            <input onInput={(event) => props.onName(event.target.value)} onChange={() => props.changeStyle(true)} 
                   className={style.FirstInput} placeholder={props.name}/>
            <button onClick={() => props.updateTask()} onMouseEnter={() => props.onID(props.id)} className={props.inputStyle} id={props.id}>Update</button>
            <button className={style.Button} onClick={() => props.deleteTask(props.id)}>Delete</button>
        </div>
        <input onInput={(event) => props.onContent(event.target.value)} className={style.SecondInput} placeholder={props.content}/>
    </div>

export default Task;