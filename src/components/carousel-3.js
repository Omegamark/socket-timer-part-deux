import React, { Component } from "react";
import { Carousel } from "react-materialize";
import { findDOMNode } from "react-dom";

class CatCarousel3 extends Component {
  interval = null;
  ref = null;

  componentDidMount = () => {
    this.interval = window.setInterval(() => {
      window.$(findDOMNode(this.ref)).carousel("next", 3); // ".carousel-slider"
    }, 2000);
  };

  componentWillUnmount = () => {
    window.clearInterval(this.interval);
  };

  render = () => {
    const { catPics } = this.props;

    // The key property below is a trick, it unmounts/remounts the component when changed.
    return (
      <div>
        <Carousel ref={r => (this.ref = r)}>
          {catPics.length ? (
            catPics.map(image => <img key={image} src={image} />)
          ) : (
            <div>No pics yet</div>
          )}
        </Carousel>
      </div>
    );
  };
}

export default CatCarousel3;
