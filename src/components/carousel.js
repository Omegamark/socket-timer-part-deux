import React, { Component } from "react";
import { Carousel } from "react-materialize";
import { findDOMNode } from "react-dom";

class CatCarousel extends Component {
  interval = null;
  ref = null;

  componentDidMount = () => {
    this.interval = window.setInterval(() => {
      window.$(findDOMNode(this.ref)).carousel("next"); // ".bottom-carousel"
    }, 2000);
  };

  componentWillUnmount = () => {
    window.clearInterval(this.interval);
  };

  render = () => {
    const { catPics } = this.props;

    return (
      <div>
        <Carousel ref={r => (this.ref = r)} className="bottom-carousel">
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

export default CatCarousel;
