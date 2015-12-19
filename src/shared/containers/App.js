import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="application">
        <Header />
        <section className="content">
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
}
