import React from "react";

class TopTimerSection extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    };

    render() {
        return (
            <div className="taskInput">
                <h1 id="title"> Pomodoro Timer </h1>
                <section id="topTimerContainer">
                    <div id="workTimerChooser">
                        <label> Study session length: </label>
                        <input type="number" />
                    </div>
                    <div id="shortBreakTimerChooser"> 
                        <label> Short break: </label>
                        <input type="number" />
                    </div>
                    <div id="longBreakTimerChooser">
                        <label> Long break: </label>
                        <input type="number" />
                    </div>
                </section>
            </div>
        )
    };
};

export default TopTimerSection;