import React, { Component } from "react";

class List extends Component {
    constructor() {
        super();

        this.state = {
            numberOfItems: 3,
            taskNames: [
                {
                    name: "this is an item"
                },
                {
                    name: "this is another item"
                },
                {
                    name: "Yet, another item"
                },
                {
                    name: "Yet, another item"
                },
                {
                    name: "Yet, another item"
                }
            ],
        };
    };



    render() {
        return (
            <div className="List">
                {this.state.taskNames.map(item =>
                    <div>
                        <div class="listItem"><input type="checkBox"/> <p>{item.name}</p> <p class="taskTime">8:00am</p></div>
                        <hr />
                    </div>
                )}
                
                
            </div>
        )
    }
    
}

export default List