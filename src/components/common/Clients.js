import React, { Component } from 'react'
import { Link } from 'react-router'
import Slider from 'react-slick'

export default class Clients extends Component {
  render() {
    var settings = {
      dots: true,
      lazyLoad: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 979,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div className="clients">
        <h2 className="title text-center">Our Clients &amp; Partners</h2>
        <hr className="title-border" />
        <p className="title-desc text-center">We help our clients stay ahead of the game.</p>
        <Slider {...settings}>
          <div className="apple"></div>
          <div className="visa"></div>
          <div className="gap"></div>
          <div className="wellsfargo"></div>
          <div className="palantir"></div>
          <div className="macys"></div>
          <div className="ibm"></div>
          <div className="walmart"></div>
        </Slider>
      </div>
    );
  }
}
