import React from "react";
import background from "../images/table.jpg";
import TopTimerSection from "./pomodoroTimerParts/TopTimerSection";

class PomodoroTimer extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    };

    render() {
        return(
            <div className="ToDoSection" style={{ backgroundImage: `url(${background})`}}>
                <TopTimerSection />
                <div className="List">
                
                </div>
            </div>
        )
    };
};

export default PomodoroTimer;
