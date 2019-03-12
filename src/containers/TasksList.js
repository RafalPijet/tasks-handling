import React from "react";
import Task from "../components/Task";

class TasksList extends React.Component {
    get tasks() {
        return this.props.data.map(task => <Task deleteTask={this.props.deleteTask} id={task.id} key={task.id}
                                                 name={task.title} content={task.content}
                                                 updateTask={this.props.updateTask}/>)
    }
    render() {
        return (
            <div>
                {this.tasks}
            </div>
        )
    }
}

export default TasksList;