import App from './containers/App'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import NotFound from './components/pages/NotFound'

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'about', component: About },
    { path: 'services', component: Services },
    { path: '*', component: NotFound }
  ]
}

export default routes
