import React, { Component } from "react";
import logo from "./logo.svg";
import { Carousel } from "react-materialize";
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
        <Carousel
          options={{}}
          images={[
            "https://lorempixel.com/250/250/nature/1",
            "https://lorempixel.com/250/250/nature/2",
            "https://lorempixel.com/250/250/nature/3",
            "https://lorempixel.com/250/250/nature/4",
            "https://lorempixel.com/250/250/nature/5"
          ]}
        />
        <div>
          <Carousel
            className="Reverse"
            options={{ fullWidth: true }}
            images={[
              "https://lorempixel.com/800/400/food/1",
              "https://lorempixel.com/800/400/food/2",
              "https://lorempixel.com/800/400/food/3",
              "https://lorempixel.com/800/400/food/4",
              "https://lorempixel.com/800/400/food/5"
            ]}
          />
          <p>I'm a Slider!!!</p>
        </div>
        <div>
          <Carousel
            images={[
              "https://lorempixel.com/250/250/nature/1",
              "https://lorempixel.com/250/250/nature/2",
              "https://lorempixel.com/250/250/nature/3",
              "https://lorempixel.com/250/250/nature/4",
              "https://lorempixel.com/250/250/nature/5"
            ]}
          />
        </div>
        <div>
          <p className="App-intro">
            Here's the 'timestamp' variable {this.state.timestamp.text}
            {console.log(this.state.timestamp.entities)}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
