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
            content: "",
            progress: style.ProgressOff,
            button: style.ButtonDisabled,
            isWorking: false
        };
    }
    componentDidMount() {
        document.getElementById("addTaskButton").setAttribute("disabled", "true");
    }
    getAllTasks() {
        let tasks = [];
        this.imBusy(true);

        fetch(this.state.baseUrl)
            .then(response => response.json())
            .then(response => {
                response.map(task => tasks.push(task));
                this.setState({
                    tasks: tasks
                });
                this.imBusy(false);
            });
    }
    removeTask(id) {
        this.imBusy(true);

        fetch(this.state.baseUrl + `/${id}`, {method: "DELETE"})
            .then(this.getAllTasks.bind(this));
    }
    addTask() {

        if (this.state.title.length > 2 && this.state.content.length > 2) {
            this.imBusy(true);
            let newTask = {
                title: this.state.title,
                content: this.state.content
            };

            fetch(this.state.baseUrl, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(newTask)})
                .then(this.getAllTasks.bind(this));
            this.setState({
                title: "",
                content: ""
            });

        } else {
            alert("You must enter at least 3 characters!!!");
        }
    }
    updateTask(id, title, content) {
        this.imBusy(true);
        let updateTask = {
            id: id,
            title: title,
            content: content
        };
        fetch(this.state.baseUrl, {method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify(updateTask)})
            .then(this.getAllTasks.bind(this));
    }
    takeName(name) {

        if (name.length >= 3) {
            this.setState({
                title: name
            });
        }
    }
    takeContent(content) {

        if (content.length >= 3) {
            this.setState({
                content: content
            });
        }
    }
    imBusy(isBusy) {
        let buttons = document.querySelectorAll("button");
        let inputs = document.querySelectorAll("input");

        if (isBusy) {
            this.setState({
                progress: style.ProgressOn,
                button: style.ButtonDisabled,
                isWorking: true
            });

            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }

            for (let i = 0; i < inputs.length; i++) {
                inputs[i].disabled = true;
            }

        } else {
            this.setState({
                progress: style.ProgressOff,
                button: style.Button,
                isWorking: false
            });

            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
            }

            for (let i = 0; i < inputs.length; i++) {
                inputs[i].disabled = false;
            }
        }
    }
    render() {
        return (
            <div>
                <div className={style.Main}>
                    <h1 className={this.state.progress}
                        onClick={this.getAllTasks.bind(this)}>My TASKS ({this.state.tasks.length})</h1>
                    <TaskForm onName={this.takeName.bind(this)} onContent={this.takeContent.bind(this)}/>
                    <button onClick={this.addTask.bind(this)} className={this.state.button} id="addTaskButton">Add new task</button>
                </div>
                <TasksList deleteTask={this.removeTask.bind(this)} data={this.state.tasks}
                           updateTask={this.updateTask.bind(this)} isWorking={this.state.isWorking}/>
            </div>
        )
    }
}

export default hot(module)(App);
