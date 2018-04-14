import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { Link } from "react-router";
import ga from "react-ga";

class Products extends Component {
	componentDidMount() {
		const { routing } = this.props;
		ga.pageview(routing.path);
	}

	render() {
		return (
			<div className="products">
				<Helmet title="Products" />
				<div className="heading">
					<div className="container">
						<div className="row">
							<div className="col-sm-5">
								<h2 className="title title-big white">
									Building Next<br />Gen Products
								</h2>
							</div>
							<div className="col-sm-7">
								<p className="title-desc white">
									Knowledge is addictive, cumulative and incremental. Curiosity
									and insight are things we value, checkout what amazing
									products we build.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="target container no-padding-lr">
					<div className="row">
						<h2 className="title text-center">See what we build</h2>
						<hr className="title-border" />
					</div>

					<div className="rvedas row">
						<div className="col-sm-6">
							<h3>RvedaS (Rabana)</h3>
							<p>
								RvedaS is an 100% Open Source iPaaS framework offered as SaaS
								hosted on either AWS or Azure and provides end to end
								application integration framework with ease of implementation,
								automation, patterns to handle PCI/PII data, and application
								performance monitoring.
							</p>
							<p>
								As many companies are migrating on premise applications to
								cloud, iPaaS frameworks are playing crucial role in providing
								integration solutions. The current offerings from various
								vendors are lacking some key features such as Infrastructure
								Profiling, one stop shop for features such as Tracking,
								Auditing, Performance Analysis and Application Performance
								Monitoring.
							</p>
							<p>
								All retail companies regardless of scale/size, be it
								Small/Medium/Large companies can run their entire ESB platform
								on ClouSb.
							</p>

							<h4>Scope Definition</h4>
							<p>
								The Project will introduce new iPaaS technology; including the
								following:
							</p>
							<ul>
								<li>Access to transactional data</li>
								<li>Performance analysis dashboard</li>
								<li>Anomaly detection</li>
								<li>Infrastructure Profiling</li>
								Including the following interfaces:
								<li>REST</li>
								<li>SOAP</li>
								Desired Enhancements
								<li>Flexible</li>
							</ul>
						</div>
						<div className="col-sm-6">
							<div className="image" />
						</div>
						<div className="col-sm-12">
							<div className="question">
								<h4>Technical Specifications</h4>
								<ul>
									<li>
										WSO2 – 100% open source core Enterprise Service Bus (ESB)
									</li>
									<li>WSO2 – Api management</li>
									<li>
										Elastic Search – Log collection document database (hosted on
										Azure)
									</li>
									<li>
										Rabana – In-house developed UI framework that have advanced
										features to track, audit, analyze
									</li>
									<li>
										R – for data analytics, raw log processing from Elastic
										Search
									</li>
									<li>Kafka – for streaming (messaging, data pipelines)</li>
									<li>Docker/Kubernetes – Containerization/Orchestration</li>
								</ul>

								<h4>Key Capabilities</h4>
								<ul>
									<li>
										Communication protocol connectors (FTP, HTTP, AMQP, MQTT,
									</li>
									Kafka, AS1/2/3/4, etc.)
									<li>
										Application connectors/adapters for SaaS and on-premises
										packaged applications
									</li>
									<li>Data formats (XML, JSON, ASN.1, etc.)</li>
									<li>Data standards (EDIFACT, HL7, SWIFT, etc.)</li>
									<li>Data mapping and transformation</li>
									<li>Data quality</li>
									<li>Routing and orchestration</li>
									<li>
										Integration flow development and life cycle management tools
									</li>
									<li>
										Integration flow operational monitoring and management
									</li>
									<li>Full life cycle API management</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="esb row">
						<div className="col-sm-4">
							<h3>CloudSB (ESB in cloud)</h3>
							<p>
								ClouSb is a full-stack cloud implementation; retail ESB in cloud
								product which simplifies the integration of retail systems like
								Distribution Center, Regional Inventory in the cloud. It
								completely runs on open source platforms like Camel, Active MQ
								&amp; Kafka.
							</p>
							<p>
								All retail companies regardless of scale/size, be it
								Small/Medium/Large companies can run their entire ESB platform
								on ClouSb.
							</p>
							<p>
								All retail companies regardless of scale/size, be it
								Small/Medium/Large companies can run their entire ESB platform
								on ClouSb.
							</p>
						</div>
						<div className="col-sm-8">
							<div className="image" />
						</div>
						<div className="col-sm-12">
							<div className="question">
								<h4>How does ClouSb licensing work?</h4>
								<p>
									We simplified the licensing cost model for our product. All
									our customers will pay per usage directly to Express Global
									Solutions. There are no hidden fees. The total cost incur is
									calculated based on the following calculation - Number of
									hours * Size of the virtual machines (CPU,Memory,Storage). For
									rates please contact our Marketing team.
								</p>
							</div>
							<div className="question">
								<h4>
									Are there any additional licensing cost for customers for
									software stack?
								</h4>
								<p>Absolutely NO.</p>
							</div>
							<div className="question">
								<h4>Is ClouSb offers on-premise deployment?</h4>
								<p>
									Yes, our experienced professional services team will come to
									you to evaluate your ESB needs and will make a recommendation
									and advise you on best approach to deploy it in your
									on-premise data center. We provide this triage service
									absolutely free of cost to our potential customers. Please
									contact our Marketing team to schedule an appointment with our
									professional services experts.
								</p>
							</div>
							<div className="question">
								<h4>What about data integrity and security?</h4>
								<p>
									This is the first question that comes into the minds of our
									customers when they are ready to integrate their mission
									critical systems in the cloud. Data integrity and Security is
									the NUMBER UNO priority when we first started implementing our
									product.{" "}
								</p>
							</div>
							<div className="question">
								<h4>What about data integrity and security?</h4>
								<p>
									This is the first question that strikes our customers when
									they are ready to integrate their mission critical systems in
									the cloud. Data integrity and Security is a top priority baked
									right into the product.{" "}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="cblock container no-padding-lr">
					<div className="row">
						<div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
							<p className="title-desc title-desc-medium text-left">
								Get in touch with us for additional information, to schedule a
								free evaluation of CloudSB infrastructure.
							</p>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link
								to="contact"
								className="pull-right btn btn-primary btn-lg btn-arrow btn-big"
							>
								Contact Us<span className="icon icon-arrow-circle-right" />
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
	};
}

export default connect(mapStateToProps)(Products);
