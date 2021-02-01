import React, { Component } from 'react';
import Mainbar from "./Components/Mainbar";
import Sidebar from "./Components/Sidebar";
import styles from "./styles/styles.css"
import ToDoSection from "./Components/ToDoSection"
import PomodoroTimer from "./Components/PomodoroTimer";

class App extends Component {
    constructor() {
        super();
        this.state = {
          pageChecker: "ToDoSection",
        };
        this.topChooseAppRender = this.topChooseAppRender.bind(this);
    };

    topChooseAppRender = () => {
      let pageName = "";
      console.log('top render');

      
    }

  render() {

    let page;

    if (this.state.pageChecker == "ToDoSection") {
      page = <ToDoSection />;
    } else if (this.state.pageChecker == "PomodoroTimer") {
      page = <PomodoroTimer />;
    }

    return(
      <div className="App">

          <div className="pageWrapper">
              <Mainbar />
              <Sidebar topChooseAppRender={this.topChooseAppRender()} />

              
              
              
              {page}
          </div>
      </div>
    )
  }

};

export default App;
