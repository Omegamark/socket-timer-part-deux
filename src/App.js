import React, { Component } from "react";
import logo from "./logo.svg";
import { Carousel } from "react-materialize";
import { subscribeToTimer } from "./api";

import "./App.css";
var catPic = "";
var catPicArray = [];
// Array of randomized cat pics
var shuffledCatPicArray = [];

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
  // console.log('Hello from appjs', state)
  render() {
    // This is working!!
    if (this.state.timestamp.entities && this.state.timestamp.entities.media) {
      catPic = this.state.timestamp.entities.media[0].media_url;
      catPicArray.push(catPic);
      console.log("finally an array", catPicArray);
    }

    if (catPicArray.length > 0) {
      shuffledCatPicArray = shuffleCatPicArray(catPicArray);
      console.log("I am a randomized array", shuffledCatPicArray);
    }

    // Function to randomize catpics in array built from twitter stream.
    function shuffleCatPicArray(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    return (
      <div className="App">
        <Carousel images={[shuffledCatPicArray]} />
        <div>
          <Carousel
            options={{ fullWidth: true, dist: 0 }}
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

        {this.state.timestamp.entities &&
        this.state.timestamp.entities.media ? (
          <div>
            <Carousel
              className="bottom-carousel"
              images={[
                this.state.timestamp.entities.media[0].media_url,
                "http://pbs.twimg.com/media/DNU1XXSUEAEo3OP.jpg",
                "https://lorempixel.com/250/250/nature/3",
                "https://lorempixel.com/250/250/nature/4",
                "https://lorempixel.com/250/250/nature/5"
              ]}
            />
          </div>
        ) : (
          <div>
            <Carousel
              className="bottom-carousel"
              images={[
                "https://lorempixel.com/250/250/nature/1",
                "https://lorempixel.com/250/250/nature/2",
                "https://lorempixel.com/250/250/nature/3",
                "https://lorempixel.com/250/250/nature/4",
                "https://lorempixel.com/250/250/nature/5"
              ]}
            />
          </div>
        )}

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
