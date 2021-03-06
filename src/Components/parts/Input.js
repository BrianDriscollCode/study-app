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
                            <option value="5.5"> 5:30am </option>
                            <option value="6"> 6:00am </option>
                            <option value="6.5"> 6:30am </option>
                            <option value="7"> 7:00am </option>
                            <option value="7.5"> 7:30am </option>
                            <option value="8"> 8:00am </option>
                            <option value="8.5"> 8:30am </option>
                            <option value="9"> 9:00am </option>
                            <option value="9.5"> 9:30am </option>
                            <option value="10"> 10:00am </option>
                            <option value="10.5"> 10:30am </option>
                            <option value="11"> 11:00am </option>
                            <option value="11.5"> 11:30am </option>
                            <option value="12"> 12:00pm </option>
                            <option value="12.5"> 12:30pm </option>
                            <option value="13"> 1:00pm </option>
                            <option value="13.5"> 1:30pm </option>
                            <option value="14"> 2:00pm </option>
                            <option value="14.5"> 2:30pm </option>
                            <option value="15"> 3:00pm </option>
                            <option value="15.5"> 3:30pm </option>
                            <option value="16"> 4:00pm </option>
                            <option value="16.5"> 4:30pm </option>
                            <option value="17"> 5:00pm </option>
                            <option value="17.5"> 5:30pm </option>
                            <option value="18"> 6:00pm </option>
                            <option value="18.5"> 6:30pm </option>
                            <option value="19"> 7:00pm </option>
                            <option value="19.5"> 7:30pm </option>
                            <option value="20"> 8:00pm </option>
                            <option value="20.5"> 8:30pm </option>
                            <option value="21"> 9:00pm </option>
                            <option value="21.5"> 9:30pm </option>
                            <option value="22"> 10:00pm </option>
                            <option value="22.5"> 10:30pm </option>
                            <option value="23"> 11:00pm </option>
                            <option value="23.5"> 11:30pm </option>
                            <option value="24"> 12:00pm </option>
                            <option value="24.5"> 12:30pm </option>

                        </select>
                    </div>
    
                    <button type="button" id="button" onClick={this.handleSubmit}> Add Task </button>
                </div>
                 
            </div>
        );

    };

};

export default Input;