import React from "react";

const TaskForm = props =>
    <div style={{maxWidth: "600px", width: "100%", display: "flex", alignItems: "center"}}>
        <div>
            <label style={{fontSize: "18px"}}>Enter task name: </label>
            <input style={{fontSize: "18px"}} onChange={props.onName} value={props.valueTitle}/>
        </div>
        <div>
            <label style={{fontSize: "18px"}}>Enter content of task:</label>
            <input style={{fontSize: "18px", width: "100%", maxWidth: "400px"}}
                   onChange={props.onContent} value={props.valueContent}/>
        </div>
    </div>

export default TaskForm;
