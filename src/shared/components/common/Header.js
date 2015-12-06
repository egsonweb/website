import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="navigation">
          <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">
              Express Global LLC
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/about">Who are we</Link></li>
                <li><a href="#">What we do</a></li>
                <li><a href="#">Join us</a></li>
                <li><a href="#">Get in touch</a></li>
              </ul>
            </div>
          </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
