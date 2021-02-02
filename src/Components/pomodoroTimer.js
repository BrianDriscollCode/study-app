import React from "react";
import background from "../images/table.jpg";
import TopTimerSection from "./pomodoroTimerParts/TopTimerSection";
import BottomTimerSection from "./pomodoroTimerParts/BottomTimerSection";
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
                <BottomTimerSection />
            </div>
        )
    };
};

export default PomodoroTimer;
