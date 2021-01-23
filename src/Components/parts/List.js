import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfItems: 3,
        };
    };



    render() {
        return (
            <div className="List">
                {this.props.listItems.map(item =>
                    <div>
                        <div class="listItem">
                            <input type="checkBox"/> 
                            <p class="taskText">{item.task}</p> 
                            <p class="taskTime">{item.time}</p></div>
                        <hr />
                        
                    </div>
                )}

                
                
            </div>
        )
    }
    
}

export default List