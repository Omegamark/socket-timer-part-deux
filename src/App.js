import React, { Component } from "react";
import { Carousel } from "react-materialize";
import { subscribeToTwitter } from "./api";
import CatCarousel from "./components/carousel";
import CatCarousel2 from "./components/carousel-2";
import CatCarousel3 from "./components/carousel-3";
import "./App.css";
// Put this in state.
// Array of randomized cat pics
// var shuffledCatPicArray = [];

class App extends Component {
  state = {
    tweet: "no tweet yet",
    catPics: {}
  };

  componentDidMount() {
    subscribeToTwitter((err, tweet) => {
      const { catPics } = this.state;

      if (tweet && tweet.entities && tweet.entities.media) {
        const catPic = tweet.entities.media[0].media_url;
        catPics[catPic] = catPic;
        console.log("finally an array", Object.keys(catPics));

        this.setState({
          tweet,
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

  // From a previous solution, no longer necessary.
  // shuffleCatPicArray = originalArray => {
  //   let array = originalArray.slice();
  //   var currentIndex = array.length,
  //     temporaryValue,
  //     randomIndex;
  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //
  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }
  //   return array;
  // };

  // console.log('Hello from appjs', state)
  render() {
    const { tweet, catPics } = this.state;
    // This is working!!
    //
    const catPicArray = Object.keys(catPics);

    return (
      <div className="App">
        <CatCarousel3
          catPics={catPicArray}
          key={"catPics3-" + catPicArray.length}
        />
        <CatCarousel2
          catPics={catPicArray}
          key={"catPics2-" + catPicArray.length}
        />

        <CatCarousel
          catPics={catPicArray}
          key={"catPics-" + catPicArray.length}
        />

        {tweet && (
          <div>
            <p className="App-intro">
              HERE'S THE TWEET: {tweet.text}
              {console.log(tweet.entities)}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
