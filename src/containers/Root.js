import React, { PropTypes, Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired
  };

  get content() {
    return (
      <Router routes={this.props.routes} history={this.props.history} />
    )
  }

  render() {
    return (
      <Provider store={this.props.store}>
        {this.content}
      </Provider>
    );
  }
}
