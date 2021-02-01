import React, { Component } from 'react';
import Mainbar from "./Components/Mainbar";
import Sidebar from "./Components/Sidebar";
import styles from "./styles/styles.css"
import ToDoSection from "./Components/ToDoSection"
import PomodoroTimer from "./Components/PomodoroTimer";
import Stats from "./Components/Stats";
import LearnMore from "./Components/LearnMore";

class App extends Component {
    constructor() {
        super();
        this.state = {
          toDoSection: false,
          pomodoroTimer: true,
          stats: false,
          learnMore: false
        };
        this.topChooseAppRender = this.topChooseAppRender.bind(this);
    };

    topChooseAppRender = (event) => {

      console.log(event.target.innerHTML);
      
      if (event.target.innerHTML == 'Study List') {
        this.setState({ 
          toDoSection: true,
          pomodoroTimer: false,
          stats: false,
          learnMore: false
        });
      } else if (event.target.innerHTML == 'Pomodoro Timer') {
        this.setState({
          toDoSection: false,
          pomodoroTimer: true,
          stats: false,
          learnMore: false
        });
      } else if (event.target.innerHTML == "Stats") {
        this.setState({
          toDoSection: false,
          pomodoroTimer: false,
          stats: true,
          learnMore: false
        });
      } else if (event.target.innerHTML == "Learn More") {
        this.setState({
          toDoSection: false,
          pomodoroTimer: false,
          stats: false,
          learnMore: true
        });
      }
    };

  render() {

    return(
      <div className="App">

          <div className="pageWrapper">
              <Mainbar />
              <Sidebar topChooseAppRender={this.topChooseAppRender} />

              {this.state.toDoSection ? <ToDoSection /> : null}
              {this.state.pomodoroTimer ? <PomodoroTimer /> : null}
              {this.state.stats ? <Stats /> : null}
              {this.state.learnMore ? <LearnMore /> : null}

          </div>
      </div>
    )
  }

};

export default App;
