import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfItems: 3,
            positionNumber: 0,
        };
        this.handleCompletedTask = this.handleCompletedTask.bind(this);
    };
    

    handleCompletedTask = (event) => {
        event.preventDefault();

        let value = event.target.value;
        console.log(value);
        
    }

    taskPositionSetter = () => {

        if (this.state.positionNumber == 0) {
            this.setState({
                positionNumber: 1,
            });
            return "position" + this.state.positionNumber;
        } else {
            
            return "position" + this.state.positionNumber;
        }
    }

    render() {
        return (
            <div className="List">
                {this.props.listItems.map(item =>
                    <div>
                        <div class="listItem">
                            <input class="checkBox" type="checkBox"
                                    onChange ={this.handleCompletedTask} /> 
                            <div class="listTimeAndTask">
                                <p class="taskText" id={this.taskPositionSetter()}>{item.task}</p> 
                                <p class="taskTime">{item.time}</p>
                            </div>
                        </div>
                        <hr />
                        
                    </div>
                )}

                
                
            </div>
        )
    }
    
}

export default List