import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { syncReduxAndRouter } from 'redux-simple-router'
import createHistory from 'history/lib/createBrowserHistory'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import configureStore from '../shared/store/configureStore'
import routes from '../shared/routes'

const store = configureStore()
const history =useScroll(createHistory)()
const mountNode = document.getElementById('mount')

syncReduxAndRouter(history, store);

render (
  <Provider store={store}>
    <Router routes={routes} history={history}/>
  </Provider>,
  mountNode
)
