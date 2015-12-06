import React, { Component } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="application">
        <Header />
        <section id="content">
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
}
