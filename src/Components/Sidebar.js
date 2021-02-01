import React from "react";

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    };

    render() {
        return (
            <div className="Sidebar">
                <p class="sideBarText" onClick={this.props.topChooseAppRender} value="Study List">Study List</p>
                <hr />
                <p class="sideBarText" onClick={this.props.topChooseAppRender}>Pomodoro Timer</p>
                <hr />
                <p class="sideBarText" onClick={this.props.topChooseAppRender}>Stats</p>
                <hr />
                <p class="sideBarText" onClick={this.props.topChooseAppRender}>Learn More</p>
                <hr />
            </div>
        );
    }
};

export default Sidebar;