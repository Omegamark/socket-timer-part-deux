import React, { Component } from "react";
import logo from "./logo.svg";
import { subscribeToTimer } from "./api";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    );
  }

  // There are media urls in many of the arrays, though it is important to filter these and choose only the tweets with media.

  state = {
    timestamp: "no timestamp yet"
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Here's the 'timestamp' variable {this.state.timestamp.text}
          {console.log(this.state.timestamp.entities)}
        </p>
      </div>
    );
  }
}

export default App;
