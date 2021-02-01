import { render } from "@testing-library/react";
import React, { Component } from "react";

class Input extends Component {
    constructor() {
        super();
        this.state = {
            task: "",
            time: 0,
        };
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.time == 0) {

            this.setState({
                time: "4:00am",
            });
        }
        
        setTimeout(() => this.props.addTask(this.state.task, this.state.time), 100);
        this.props.generateItemPosition();
    };

    handleTaskInput = (event) => {
        event.preventDefault();
        this.setState({
            task: event.target.value,
        });
        console.log(this.state.task);
    };

    handleTimeInput = (event) => {
        event.preventDefault();
        this.setState({
            time: event.target.value,
        });
        console.log(this.state.time);
    };

    //handleUniqueId function


    render() {

        return (
            <div className="taskInput">
                <h1 id="title"> Study Tasks </h1>
                <div id="taskInputLine">
                    <div id="taskSection">
                        <label>Task: </label>
                        <input type="text" name="taskName" onChange={this.handleTaskInput} />
                    </div>
                    <div id="startTimeSection">
                        <label>Start time: </label>
                        <select name="taskTimes" name="taskTime" value="4:00am" onChange={this.handleTimeInput}>
                            <option value="4:00am"> 4:00am </option>
                            <option value="4:30am"> 4:30am </option>
                            <option value="5:00am"> 5:00am </option>
                            <option value="5:30am"> 5:30am </option>
                            <option value="6:00am"> 6:00am </option>
                            <option value="6:30am"> 6:30am </option>
                            <option value="7:00am"> 7:00am </option>
                            <option value="7:30am"> 7:30am </option>
                            <option value="8:00am"> 8:00am </option>
                            <option value="8:30am"> 8:30am </option>
                            <option value="9:00am"> 9:00am </option>
                            <option value="9:30am"> 9:30am </option>
                            <option value="10:00am"> 10:00am </option>
                            <option value="10:30am"> 10:30am </option>
                            <option value="11:00am"> 11:00am </option>
                            <option value="11:30am"> 11:30am </option>
                            <option value="12:00pm"> 12:00pm </option>
                            <option value="12:30pm"> 12:30pm </option>
                            <option value="1:00pm"> 1:00pm </option>
                            <option value="1:30pm"> 1:30pm </option>
                            <option value="2:00pm"> 2:00pm </option>
                            <option value="2:30pm"> 2:30pm </option>
                            <option value="3:00pm"> 3:00pm </option>
                            <option value="3:30pm"> 3:30pm </option>
                            <option value="4:00pm"> 4:00pm </option>
                            <option value="4:30pm"> 4:30pm </option>
                            <option value="5:00pm"> 5:00pm </option>
                            <option value="5:30pm"> 5:30pm </option>
                            <option value="6:00pm"> 6:00pm </option>
                            <option value="6:30pm"> 6:30pm </option>
                            <option value="7:00pm"> 7:00pm </option>
                            <option value="7:30pm"> 7:30pm </option>
                            <option value="8:00pm"> 8:00pm </option>
                            <option value="8:30pm"> 8:30pm </option>
                            <option value="9:00pm"> 9:00pm </option>
                            <option value="9:30pm"> 9:30pm </option>
                            <option value="10:00pm"> 10:00pm </option>
                            <option value="10:30pm"> 10:30pm </option>
                            <option value="11:00pm"> 11:00pm </option>
                            <option value="11:30pm"> 11:30pm </option>
                            <option value="12:00am"> 12:00am </option>
                            <option value="12:30am"> 12:30am </option>

                        </select>
                    </div>
    
                    <button type="button" id="button" onClick={this.handleSubmit}> Add Task </button>
                </div>
                 
            </div>
        );

    };

};

export default Input;