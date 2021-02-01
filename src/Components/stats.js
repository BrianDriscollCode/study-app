import React from "react";
import background from "../images/table.jpg";

class Stats extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    };

    render() {
        return (
            <div className="ToDoSection" style={{ backgroundImage: `url(${background})`}}>
                <div className="taskInput">
                    <h1 id="title"> Stats </h1>
                 
                </div>

                <div className="List">
                
                </div>
                
            </div>
        );
    };
};

export default Stats;