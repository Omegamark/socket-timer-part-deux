import React, { Component } from "react";
import { Carousel } from "react-materialize";
var catPicArray = [];

class CatCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    catPicArray = this.props.catPicArray;
    return (
      <div>
        <Carousel
          className="bottom-carousel"
          images={
            catPicArray.length > 2
              ? catPicArray
              : [
                  "https://lorempixel.com/250/250/nature/1",
                  "https://lorempixel.com/250/250/nature/2"
                ]
          }
        />
        <script>
          $('.bottom-carousel').carousel(); console.log('I'M A SCRIPT');
        </script>
      </div>
    );
  }
}

export default CatCarousel;
