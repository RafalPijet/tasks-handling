import React from "react";
import { hot } from "react-hot-loader";
import TasksList from "./TasksList";
import TaskForm from "../components/TaskForm";
import style from "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            baseUrl: "https://mysterious-depths-52522.herokuapp.com/v1/tasks",
            tasks: [],
            title: "",
            content: ""
        };
    }
    getAllTasks() {
        let tasks = [];

        fetch(this.state.baseUrl)
            .then(response => response.json())
            .then(response => {
                response.map(task => tasks.push(task));
                this.setState({
                    tasks: tasks
                });
            });
    }
    removeTask(id) {
        fetch(this.state.baseUrl + `/${id}`, {method: "DELETE"})
            .then(this.getAllTasks.bind(this))
    }
    addTask() {
        let newTask = {
            title: this.state.title,
            content: this.state.content
        };
        fetch(this.state.baseUrl, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(newTask)})
            .then(this.getAllTasks.bind(this));
    }
    takeName(name) {
        this.setState({
            title: name
        });
    }
    takeContent(content) {
        this.setState({
            content: content
        })
    }
    render() {
        return (
            <div>
                <div className={style.Main}>
                    <h1 style={{cursor: "pointer"}}
                        onClick={this.getAllTasks.bind(this)}>My TASKS ({this.state.tasks.length})</h1>
                    <TaskForm onName={this.takeName.bind(this)} onContent={this.takeContent.bind(this)}/>
                    <button onClick={this.addTask.bind(this)} className={style.Button}>Add new task</button>
                </div>
                <TasksList deleteTask={this.removeTask.bind(this)} data={this.state.tasks}/>
            </div>
        )
    }
}

export default hot(module)(App);
