import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="heading">
          <div className="container">
            <div className="row">
            	<div className="col-sm-4">
            		<h2 className="heading-title">Powered by<br />the team</h2>
            	</div>
            	<div className="col-sm-8">
								<p>The power of Express is in the strength of the team, its the team who channel all that collaborative energy. We are the ones who get the job done.</p>
            	</div>
            </div>
          </div>
        </div>

        <div className="story container">
          <div className="row">
            <h2 className="title">Our story</h2>
            <hr className="title-border" />
            <div className="col-sm-12 col-md-12 col-lg-6">
              <p>We are the business transformation partner of choice for organizations around the world. As a global technology services and professional services provider, we enable businesses to excel through the most potent combination of technology and staffing solutions.</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <p>We take ownership of our clients’ challenges and deliver innovative solutions – right from concept through implementation and maintenance. Our depth and breadth of service and global reach equips us to serve any client, anywhere across the globe.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
