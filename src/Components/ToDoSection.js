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
    }

    render() {
        return (
            <div className="ToDoSection">
                <Input /> 
                <List listItems = {this.state.listItems} />
            </div>
        );
    }
    
};

export default ToDoSection;
