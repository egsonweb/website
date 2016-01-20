import React from 'react'
import { render } from 'react-dom'
import { syncReduxAndRouter } from 'redux-simple-router'
import createHistory from 'history/lib/createBrowserHistory'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import injectTapEventPlugin from 'react-tap-event-plugin'


import Root from './containers/Root'
import configureStore from './redux/store/configureStore'
import routes from './routes'

const store = configureStore()
const history = useScroll(createHistory)()

injectTapEventPlugin();
syncReduxAndRouter(history, store);

render (
  <Root routes={routes} history={history} store={store} />,
  document.getElementById('mount')
)
