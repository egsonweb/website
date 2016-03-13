import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../layouts/App'
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Services from '../components/pages/Services'
import Products from '../components/pages/Products'
import Careers from '../components/pages/Careers'
import Contact from '../components/pages/Contact'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='services' component={Services} />
    <Route path='products' component={Products} />
    <Route path='careers' component={Careers} />
    <Route path='contact' component={Contact} />
  </Route>
)
