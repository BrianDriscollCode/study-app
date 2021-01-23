import React, { Component } from "react";
import Input from "./parts/Input";
import List from "./parts/List";

class ToDoSection extends Component {
    constructor() {
        super();
        this.state = {
            listItems: [
                {task: "this is a task", time: "8am"},
                {task: "this is a task", time: "9am"}
            ]
        }
        this.addTask = this.addTask.bind(this);
    }

    addTask = (task, time) => {
        let newList = this.state.listItems.map(items => {
            return items;
        });

        let taskObject = {task, time};
        newList[newList.length] = taskObject;
        
        this.setState({
            listItems: newList
        });
    }

    render() {
        return (
            <div className="ToDoSection">
                <Input addTask={this.addTask} name="Brian" /> 
                <List listItems = {this.state.listItems} />
            </div>
        );
    }
    
};

export default ToDoSection;
