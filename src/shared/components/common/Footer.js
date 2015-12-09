import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="meta container">
            <div className="block col-sm-3 col-md-3 hidden-xs">
              <h5>Express Global LLC</h5>
              <p>We are Bay area based technology consulting firm dedicated to provide high tech consultants.</p>
            </div>
            <div className="block col-sm-3 col-md-2">
              <h5>Connect with us</h5>
            </div>
            <div className="block col-sm-6 col-md-4 hidden-xs">
              <h5>Quick links</h5>
              <ul className="qlinks">
                <li><a href="#">Who are we</a></li>
                <li><a href="#">Who we do</a></li>
                <li><a href="#">Join us</a></li>
                <li><a href="#">Get in touch</a></li>
              </ul>
            </div>
            <div className="block col-sm-3 col-md-3 hidden-xs hidden-sm">
              <h5>Disclaimer</h5>
              <p>The persons or object in pictures provided are not related our consulting firm. We employ only immigrants with legal work authorization.</p>
            </div>
          </div>
          <div className="info container">
            <div className="col-sm-6">
              <p className="design">Design by Express Global LLC | All Rights Reserved</p>
            </div>
            <div className="col-sm-6">
              <p className="copyright">&copy; 2015 Express Global Solutions LLC</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
