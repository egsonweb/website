import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import ga from 'react-ga'

class Join extends Component {
  componentDidMount() {
    const { routing } = this.props
    ga.pageview(routing.path)
  }

  render() {
    return (
      <div className="join">
        <Helmet title="Who we help" />
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

function mapStateToProps({ routing }) {
  return {
    routing
  }
}

export default connect(mapStateToProps)(Join)
