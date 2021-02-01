import React from "react";
import background from "../images/table.jpg";

class LearnMore extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    };

    render() {
        return(
            <div className="ToDoSection" style={{ backgroundImage: `url(${background})`}}>
                <div className="taskInput">
                    <h1 id="title"> Learn More </h1>
                 
                </div>

                <div className="List">
                
                </div>    
            </div>
        )
    };
};

export default LearnMore;