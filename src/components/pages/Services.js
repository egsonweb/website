import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import ga from 'react-ga'

class Services extends Component {
  componentDidMount() {
    const { routing } = this.props
    ga.pageview(routing.path)
  }

  render() {
    return (
      <div className="services">
        <Helmet title="What we do" />
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

function mapStateToProps({ routing }) {
  return {
    routing
  }
}

export default connect(mapStateToProps)(Services)
