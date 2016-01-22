import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

function App({ history, children }) {
  return (
    <div className="application">
      <Helmet
        title="Express Global Solutions, LLC"
        titleTemplate="%s | Express Global Solutions, LLC"
        meta={[
          {"name": "description", "content": "We are Bay area based technology consulting firm dedicated to provide high tech consultants."}
        ]}
      />
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
