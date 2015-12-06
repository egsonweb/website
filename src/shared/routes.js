import App from './containers/App'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: '*', component: NotFound }
  ]
}

export default routes
