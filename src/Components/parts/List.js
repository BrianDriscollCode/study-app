import React, { Component } from "react";

let number = 0;

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfItems: 3,
            positionNumber: 0,
        };
        this.handleCompletedTask = this.handleCompletedTask.bind(this);
        this.strikeThrough = this.strikeThrough.bind(this);
    };
    

    handleCompletedTask = (event) => {
        let value = event.target.value;
        console.log(value);
        
        if (event.target.value == 'on') {
            console.log('clicked');
        }
        
    }

    //working here
    strikeThrough = (event) => {
        console.log('strike');
    }

    render() {
        return (
            <div className="List">
                {this.props.listItems.map(item =>
                    <div>
                        <div class="listItem">
                            <input class="checkBox" type="checkBox"
                                    onChange={this.handleCompletedTask} onClick={this.strikeThrough} /> 
                            <div class="listTimeAndTask">
                                <p class="taskText">{item.task}</p> 
                                <p class="taskTime">{item.time}</p>
                            </div>
                        </div>
                        <hr class="notebookLine" />
                    </div>
                )}

                
                
            </div>
        )
    }
    
}

export default List