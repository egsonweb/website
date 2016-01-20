import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../layouts/App'
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Services from '../components/pages/Services'
import Join from '../components/pages/Join'
import Contact from '../components/pages/Contact'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='services' component={Services} />
    <Route path='join' component={Join} />
    <Route path='contact' component={Contact} />
  </Route>
)
