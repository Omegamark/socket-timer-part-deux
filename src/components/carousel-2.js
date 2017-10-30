import React, { Component } from "react";
import { Carousel } from "react-materialize";
import { findDOMNode } from "react-dom";

class CatCarousel2 extends Component {
  interval = null;
  // ref is a built in method with react which allows one to reference the node on which the component is mounted. Eliminates the need to use HTML class/id.
  ref = null;

  componentDidMount = () => {
    this.interval = window.setInterval(() => {
      // This jQuery statement is for making the carousels auto scroll, they can also be scrolled manually.
      window.$(findDOMNode(this.ref)).carousel("prev", 2); // ".carousel-slider"
    }, 2000);
  };

  componentWillUnmount = () => {
    window.clearInterval(this.interval);
  };

  render = () => {
    // Destructiring catPics variable off of props.
    const { catPics } = this.props;
    // The key property below is a trick, it unmounts/remounts the component when changed.

    return (
      <div>
        <Carousel ref={r => (this.ref = r)} options={{ fullWidth: true }}>
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

export default CatCarousel2;
