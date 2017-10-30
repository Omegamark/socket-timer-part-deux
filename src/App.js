import React, { Component } from "react";
import { subscribeToTwitter } from "./api";
import CatCarousel from "./components/carousel";
import CatCarousel2 from "./components/carousel-2";
import CatCarousel3 from "./components/carousel-3";
import "./App.css";

class App extends Component {
  state = {
    tweet: "no tweet yet",
    catPics: {}
  };

  componentDidMount() {
    // Manipulating the tweet data retrieved from socket.io server and passing it down as props to components.
    subscribeToTwitter((err, tweet) => {
      const { catPics } = this.state;
      // Not every tweet has a (media) property, so this is a little validation to ensure I don't get errors, undefineds, etc.
      if (tweet && tweet.entities && tweet.entities.media) {
        const catPic = tweet.entities.media[0].media_url;
        catPics[catPic] = catPic;
        this.setState({
          tweet,
          catPics
        });
      }
    });
  }

  render() {
    // Destructuring tweet & catPics off of state.
    const { tweet, catPics } = this.state;
    // Using Object.keys to create an array out of the catPics object.
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
              <strong>HERE'S THE TWEET:</strong> {tweet.text}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
