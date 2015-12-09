import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div id="marketing">
          <div className="container">
            <h2 className="visible-xs">What we do</h2>
            <p className="lead">We are business consultants with a strong understanding of technology and the know-how to leverage process and technology to help businesses succeed.</p>
            <div className="service col-sm-4">
              <a href="#">
                <h3>Consulting</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, porro!</p>
                <button type="button" className="btn btn-primary hidden-xs">Learn more</button>
              </a>
            </div>
            <div className="service col-sm-4">
              <a href="#">
                <h3>Staffing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, mollitia.</p>
                <button type="button" className="btn btn-primary hidden-xs">Learn more</button>
              </a>
            </div>
            <div className="service col-sm-4">
              <a href="#">
                <h3>Training</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, dolorem!</p>
                <button type="button" className="btn btn-primary hidden-xs">Learn more</button>
              </a>
            </div>
          </div>
        </div>
        <div id="clients">
          <div className="container">
            <h2>Our clients</h2>
            <p>Display clients logos here</p>
          </div>
        </div>
      </div>
    );
  }
}
