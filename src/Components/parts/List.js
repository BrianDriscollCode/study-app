import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);

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
                {this.props.listItems.map(item =>
                    <div>
                        <div class="listItem"><input type="checkBox"/> <p>{item.task}</p> <p class="taskTime">{item.time}</p></div>
                        <hr />
                        
                    </div>
                )}

                {/* <p>{console.log(this.props.listItems, "fdsa")}</p> */}
                
                
            </div>
        )
    }
    
}

export default List