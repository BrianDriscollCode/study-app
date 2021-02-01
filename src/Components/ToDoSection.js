import React, { Component } from "react";
import Input from "./toDoParts/Input";
import List from "./toDoParts/List";
import background from "../images/table.jpg";

let positionHandler = "";

class ToDoSection extends Component {
    constructor() {
        super();
        this.state = {
            listItems: [],
            itemPosition: 0,
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


    generateItemPosition = () => {

        let currentPosition = this.state.itemPosition;
        this.setState({
            itemPosition: currentPosition + 1,
        })
        console.log(this.state.itemPosition);
        return this.state.itemPosition;
    }

    render() {
        return (
            <div className="ToDoSection" style={{ backgroundImage: `url(${background})`}}>
                <Input addTask={this.addTask} name="Brian" generateItemPosition={this.generateItemPosition} /> 
                <List 
                    listItems={this.state.listItems} 
                    itemPosition={this.state.itemPosition}
                />
            </div>
        );
    }
    
};

export default ToDoSection;
