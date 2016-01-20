import React, { Component } from 'react'

class Join extends Component {
  render() {
    return (
      <div className="join">
        <div className="heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <h2 className="title title-big white">Our target<br />Audience</h2>
              </div>
              <div className="col-sm-7">
                <p className="title-desc white">Whom do we help.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="target container no-padding-lr">
          <div className="row">
            <h2 className="title text-center">Who we help</h2>
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

export default Join
