import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="navigation">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                  <span className="fa fa-bars"></span>
                </button>
                <button type="button" className="navbar-toggle navbar-contact visible-xs">
                  <span className="fa fa-phone"></span>
                </button>
                <Link className="navbar-brand" to="/">
                  Express Global LLC
                </Link>
              </div>

              <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="links nav navbar-nav navbar-right">
                  <li><Link to="about" activeClassName="active">Who we are</Link></li>
                  <li><Link to="services" activeClassName="active">What we do</Link></li>
                  <li><Link to="join" activeClassName="active">Who we help</Link></li>
                  <li><Link to="contact" activeClassName="active">Get in touch</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

function mapStateToProps({routing}) {
  return {
    routing
  };
}

export default connect(mapStateToProps)(Header);
