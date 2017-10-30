import React, { Component } from "react";
import logo from "./logo.svg";
import { Carousel } from "react-materialize";
import { subscribeToTimer } from "./api";
import CatCarousel from "./components/carousel";

import "./App.css";
// Put this in state.
// Array of randomized cat pics
// var shuffledCatPicArray = [];

class App extends Component {
  state = {
    timestamp: "no timestamp yet",
    catPics: {}
  };

  componentDidMount() {
    subscribeToTimer((err, timestamp) => {
      const { catPics } = this.state;

      if (timestamp && timestamp.entities && timestamp.entities.media) {
        const catPic = timestamp.entities.media[0].media_url;
        catPics[catPic] = catPic;
        console.log("finally an array", Object.keys(catPics));

        this.setState({
          timestamp,
          catPics
        });
      }

      // if (newCatPicArray.length > 0) {
      //   shuffledCatPicArray = this.shuffleCatPicArray(newCatPicArray);
      //   console.log("I am a randomized array", shuffledCatPicArray);
      // }
    });
  }
  // There are media urls in many of the arrays, though it is important to filter these and choose only the tweets with media.

  // Function to randomize catpics in array built from twitter stream.

  shuffleCatPicArray = originalArray => {
    let array = originalArray.slice();
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
  };

  // console.log('Hello from appjs', state)
  render() {
    const { timestamp, catPics } = this.state;
    // This is working!!
    //
    const catPicArray = Object.keys(catPics);

    return (
      <div className="App">
        <Carousel
          images={[
            "http://pbs.twimg.com/media/DNU1XXSUEAEo3OP.jpg",
            "http://pbs.twimg.com/media/DNU1jzlVAAAdwKe.jpg",
            "https://lorfempixel.com/250/250/nature/3",
            "https://lorempixel.com/250/250/nature/4",
            "https://lorempixel.com/250/250/nature/5"
          ]}
        />
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

        <CatCarousel
          catPics={catPicArray}
          key={"catPics-" + catPicArray.length}
        />

        {timestamp && (
          <div>
            <p className="App-intro">
              Here's the 'timestamp' variable {timestamp.text}
              {console.log(timestamp.entities)}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
