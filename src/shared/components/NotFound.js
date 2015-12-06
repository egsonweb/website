import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <p>The page you are looking for is not found.</p>
        <p>Please go back to <Link to="/">home</Link></p>
      </div>
    );
  }
}
