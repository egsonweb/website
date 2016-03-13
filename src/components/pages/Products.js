import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ga from 'react-ga'

class Products extends Component {
  componentDidMount() {
    const { routing } = this.props
    ga.pageview(routing.path)
  }

  render() {
    return (
      <div className="products">
        <Helmet title="Products" />
        <div className="heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <h2 className="title title-big white">Building Next<br />Gen Products</h2>
              </div>
              <div className="col-sm-7">
                <p className="title-desc white">Knowledge is addictive, cumulative and incremental. Curiosity and insight are things we value, checkout what amazing products we build.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="target container no-padding-lr">
          <div className="row">
            <h2 className="title text-center">See what we build</h2>
            <hr className="title-border" />
            <div className="col-sm-12">
              <p className="text-center">Checkout all the amazing products we build.</p>
            </div>
          </div>

          <div className="esb row">
            <div className="col-sm-6">
              <h3>CloudSB (ESB in cloud)</h3>
              <p>ClouSb is a full-stack cloud implementation; retail ESB in cloud product which simplifies the integration of retail systems like Distribution Center, Regional Inventory in the cloud. It completely runs on open source platforms like Camel, Active MQ &amp; Kafka.</p>
              <p>All retail companies regardless of scale/size, be it Small/Medium/Large companies can run their entire ESB platform on ClouSb.</p>
              <p>All retail companies regardless of scale/size, be it Small/Medium/Large companies can run their entire ESB platform on ClouSb.</p>
            </div>
            <div className="col-sm-6">
              <div className="cloud-image"></div>
            </div>
            <div className="col-sm-12">
              <div className="question">
                <h4>How does ClouSb licensing work?</h4>
                <p>We simplified the licensing cost model for our product. All our customers will pay per usage directly to Express Global Solutions. There are no hidden fees. The total cost incur is calculated based on the following calculation - Number of hours * Size of the virtual machines (CPU,Memory,Storage). For rates please contact our Marketing team.</p>
              </div>
              <div className="question">
                <h4>Are there any additional licensing cost for customers for software stack?</h4>
                <p>Absolutely NO.</p>
              </div>
              <div className="question">
                <h4>Is ClouSb offers on-premise deployment?</h4>
                <p>Yes, our experienced professional services team will come to you to evaluate your ESB needs and will make a recommendation and advise you on best approach to deploy it in your on-premise data center. We provide this triage service absolutely free of cost to our potential customers. Please contact our Marketing team to schedule an appointment with our professional services experts.</p>
              </div>
              <div className="question">
                <h4>What about data integrity and security?</h4>
                <p>This is the first question that comes into the minds of our customers when they are ready to integrate their mission critical systems in the cloud. Data integrity and Security is the NUMBER UNO priority when we first started implementing our product. </p>
              </div>
              <div className="question">
                <h4>What about data integrity and security?</h4>
                <p>This is the first question that strikes our customers when they are ready to integrate their mission critical systems in the cloud. Data integrity and Security is a top priority baked right into the product. </p>
              </div>
            </div>
          </div>
        </div>

        <div className="cblock container no-padding-lr">
          <div className="row">
            <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
              <p className="title-desc title-desc-medium text-left">Get in touch with us for additional information, to schedule a free evaluation of CloudSB infrastructure.</p>
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

export default connect(mapStateToProps)(Products)
