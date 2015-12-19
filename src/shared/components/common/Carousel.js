import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div className="slide-one">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Revolutionising<br />Partner engagement</h2>
                  <p>Your search for the right staffing partner ends here.</p>
                  <a href="#" className="btn btn-primary hidden-xs">Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-two">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Shite here</h2>
                  <p>Some motherfucking stupid message here.</p>
                  <a href="#" className="btn btn-primary hidden-xs">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
