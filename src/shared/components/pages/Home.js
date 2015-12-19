import React, { Component } from 'react';
import Carousel from '../common/Carousel';

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<Carousel />
				<div className="marketing">
					<div className="container">
						<div className="heading">
							<h2 className="title">What we do</h2>
							<hr className="title-border" />
							<p className="title-desc">We are business consultants with a strong understanding of technology and the know-how to leverage process and technology to help businesses succeed.</p>
						</div>
						<div className="service col-sm-4">
							<a href="#">
								<span className="fa fa-database fa-2x"></span>
								<h3>Data</h3>
								<p>Stay a step ahead by identifying growth opportunities and pre-empting risks through BI/DW.</p>
								<button type="button" className="learn-btn btn btn-primary hidden-xs">Learn more</button>
							</a>
						</div>
						<div className="service col-sm-4">
							<a href="#">
								<span className="fa fa-cogs fa-2x"></span>
								<h3>Technology</h3>
								<p>Minimize time to market and ensure faster ROI through cutting edge technology services.</p>
								<button type="button" className="learn-btn btn btn-primary hidden-xs">Learn more</button>
							</a>
						</div>
						<div className="service col-sm-4">
							<a href="#">
								<span className="fa fa-users fa-2x"></span>
								<h3>Staffing</h3>
								<p>Put the right people on the right job through end-to-end Professional Services.</p>
								<button type="button" className="learn-btn btn btn-primary hidden-xs">Learn more</button>
							</a>
						</div>
					</div>
				</div>
				<div className="clients">
					<div className="container">
						<h2 className="title">Our clients</h2>
						<hr className="title-border" />
						<p>Display clients logos here</p>
					</div>
				</div>
			</div>
			);
}
}
