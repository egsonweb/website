import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <div className="meta container">
            <div className="row">
              <div className="about block col-sm-4 col-md-5 col-lg-5 hidden-xs">
                <h5>About</h5>
                <p>We are Bay area based technology consulting firm dedicated to provide high tech consultants.</p>
              </div>
              <div className="social block col-sm-3 col-lg-offset-1">
                <h5>Connect with us</h5>
                <ul>
                  <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                  <li><a href="#"><span className="fa fa-linkedin"></span></a></li>
                </ul>
              </div>
              <div className="qlinks block col-sm-5 col-md-4 col-lg-3 hidden-xs">
                <h5>Quick links</h5>
                <div className="row">
                  <div className="col-sm-6">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Who we are</a></li>
                      <li><a href="#">What we do</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul>
                      <li><a href="#">Job Seekers</a></li>
                      <li><a href="#">Employers</a></li>
                      <li><a href="#">Get in touch</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="info container">
            <div className="row">
              <div className="col-sm-6">
                <p className="design">Design by Express Global LLC | All Rights Reserved</p>
              </div>
              <div className="col-sm-4 col-sm-offset-2">
                <p className="copyright">&copy; 2015 Express Global Solutions LLC</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
