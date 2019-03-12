import React from "react";

const TaskForm = props =>
    <div style={{maxWidth: "600px", width: "100%", display: "flex", alignItems: "center"}}>
        <div>
            <label style={{fontSize: "18px"}}>Enter task name: </label>
            <input style={{fontSize: "18px"}} onInput={(event) => props.onName(event.target.value)}/>
        </div>
        <div>
            <label style={{fontSize: "18px"}}>Enter content of task:</label>
            <input style={{fontSize: "18px", width: "100%", maxWidth: "400px"}} onInput={(event) => props.onContent(event.target.value)}/>
        </div>
    </div>

export default TaskForm;