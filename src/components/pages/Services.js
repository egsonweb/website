import React, { Component } from 'react'

class Services extends Component {
  render() {
    return (
      <div className="services">
        <div className="heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <h2 className="title title-big white">On Demand<br />Ace Services</h2>
              </div>
              <div className="col-sm-7">
                <p className="title-desc white">Increase your productivity and efficiency by quickly accessing high calibre talent through our Staff Augmentation & Consulting Services.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="domains container no-padding-lr">
          <div className="row">
            <h2 className="title text-center">What we do</h2>
            <hr className="title-border" />
            <div className="col-sm-12">
              <p className="text-center">Content to be updated soon...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services
