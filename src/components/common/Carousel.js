import React, { Component } from 'react'
import { Link } from 'react-router'
import Slider from 'react-slick'

class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      speed: 300,
      lazyLoad: true,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div className="slide-one">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-8">
                  <h2>Revolutionising<br />Partner engagement</h2>
                  <p>Your search for the right staffing partner ends here.</p>
                  <Link to="contact" className="btn-arrow btn-big btn btn-primary btn-lg hidden-xs">
                    Learn more
                    <span className="icon icon-arrow-circle-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-two">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-8">
                  <h2>Hiring &amp; Staffing Simplified</h2>
                  <p>Experience the only end to end Contract Hiring process in the staffing industry.</p>
                  <Link to="contact" className="btn-arrow btn-big btn btn-primary btn-lg hidden-xs">
                    Learn more
                    <span className="icon icon-arrow-circle-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel
