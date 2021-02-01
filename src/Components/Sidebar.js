import React from "react";

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    };

    changePage = (event) => {
        console.log(event.target.innerHTML);
        this.props.topChooseAppRender();
        console.log('mid render');
    }

    midChooseAppRender = () => {
        this.props.topChooseAppRender();
        console.log('mid render');
    }

    render() {
        return (
            <div className="Sidebar">
                <p class="sideBarText" onClick={this.changePage} value="studyList">Study List </p>
                <hr />
                <p class="sideBarText"> Pomodoro Timer </p>
                <hr />
                <p class="sideBarText"> Stats </p>
                <hr />
                <p class="sideBarText"> Learn More </p>
                <hr />
            </div>
        );
    }
};

export default Sidebar;