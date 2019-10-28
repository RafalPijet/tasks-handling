import React from "react";
import style from "./Task.css";

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.name,
            content: this.props.content,
            updateButton: style.ButtonUpdate,
            deleteButton: style.Button,
            check: false
        }
    }
    componentWillReceiveProps(nextProp) {
        if (nextProp.isWorking) {
            this.setState({
                deleteButton: style.ButtonDisabled,
            });

            if (this.state.check) {
                this.setState({
                    updateButton: style.ButtonUpdateVisibleDisabled
                })
            }
        } else {
            this.setState({
                deleteButton: style.Button
            });

            if (!this.state.check) {
                this.setState({
                    updateButton: style.ButtonUpdate
                })
            }
        }
    }
    render() {
        return (
                <div className={style.Task}>
                    <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                        <input onInput={(event) => this.setState({title: event.target.value})}
                               onChange={() => this.setState({updateButton: style.ButtonUpdateVisible, check: true})}
                               className={style.FirstInput} placeholder={this.state.title}
                               onClick={(event) => event.target.value = this.state.title}/>
                        <button onClick={() => {this.props.updateTask(this.state.id, this.state.title, this.state.content);
                                                this.setState({check: false})}}
                                className={this.state.updateButton}>Update</button>
                        <button className={this.state.deleteButton} onClick={() => this.props.deleteTask(this.state.id)}>Delete</button>
                    </div>
                    <input onInput={(event) => this.setState({content: event.target.value})}
                           onChange={() => this.setState({updateButton: style.ButtonUpdateVisible, check: true})}
                           className={style.SecondInput} placeholder={this.state.content}
                           onClick={(event) => event.target.value = this.state.content}/>
                </div>
            )
    }
}

export default Task;
//onBlur po wyjściu z komponentu