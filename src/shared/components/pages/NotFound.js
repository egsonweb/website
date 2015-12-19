import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component {
  render() {
    return (
      <div id="not-found">
        <div className="container">
          <div className="row">
            <h2>Page not found</h2>
            <p>Sorry, it seems you were trying to access a page that doesn't exist.</p>
            <p>Please check the spelling of the URL you were trying to access (or) go back to <Link to="/">home</Link>  and try again</p>
          </div>
        </div>
      </div>
    );
  }
}
