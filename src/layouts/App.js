import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

function App({ history, children }) {
  return (
    <div className="application">
      <Header history={history} />
      <section className="content">
        {children}
      </section>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element
}

function mapStateToProps({ routing }) {
  return {
    routing
  }
}

export default connect(mapStateToProps)(App)
