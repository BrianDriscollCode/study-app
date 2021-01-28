import React, { Component } from 'react';
import Mainbar from "./Components/Mainbar";
import Sidebar from "./Components/Sidebar";
import styles from "./styles/styles.css"
import ToDoSection from "./Components/ToDoSection"



class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

  render() {
    return(
      <div className="App">

          <div className="pageWrapper">
              <Mainbar />
              <Sidebar />
              <ToDoSection />
          </div>
      </div>
    )
  }

};

export default App;
