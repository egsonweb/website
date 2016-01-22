import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class About extends Component {
  componentDidMount() {
    const { routing } = this.props
    console.log(routing.path)
  }

  render() {
    return (
      <div className="about">
        <Helmet title="Who we are" />
        <div className="heading">
          <div className="container">
            <div className="row">
            	<div className="col-sm-5">
            		<h2 className="title title-big white">Powered by<br />the team</h2>
            	</div>
            	<div className="col-sm-7">
								<p className="title-desc white">The power of Express Global is in the strength of the team, we are the ones who get the job done.</p>
            	</div>
            </div>
          </div>
        </div>

        <div className="story container no-padding-lr">
          <div className="row">
            <h2 className="title text-center">Our story</h2>
            <hr className="title-border" />
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <p>We are the business transformation partner of choice for organizations around the world. As a global technology services and professional services provider, we enable businesses to excel through the most potent combination of technology and staffing solutions.</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <p>We take ownership of our clients’ challenges and deliver innovative solutions – right from concept through implementation and maintenance. Our depth and breadth of service and global reach equips us to serve any client, anywhere across the globe.</p>
            </div>
          </div>
        </div>

        <div className="cblock container no-padding-lr">
          <div className="row">
            <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
              <p className="title-desc title-desc-medium text-left">Want to accelerate change for your business? Get in touch with us and see how we can help you.</p>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <Link to="contact" className="pull-right btn btn-primary btn-lg btn-arrow btn-big">
                Contact Us<span className="icon icon-arrow-circle-right"></span>
              </Link>
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

export default connect(mapStateToProps)(About)
