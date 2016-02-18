import React, { PropTypes, Component } from 'react'
import { Provider, connect } from 'react-redux'
import { Router } from 'react-router'
import ga from 'react-ga'

class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { routing } = this.props
    ga.initialize('UA-72752145-1');
    ga.pageview(routing.path)
  }

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

function mapStateToProps({ routing }) {
  return {
    routing
  }
}

export default connect(mapStateToProps)(Root)
