import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import morgan from 'morgan'
import hpp from 'hpp'

import React from 'react'
import Helmet from 'react-helmet'
import { renderToStaticMarkup } from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import { Provider } from 'react-redux';
import createLocation from 'history/lib/createLocation'

import webpackCfg from '../webpack.config'
import configureStore from '../src/redux/store/configureStore'
import routes from '../src/routes'
import config from '../config'

const app = express()

// Express middleware
app.disable('x-powered-by')
app.use(compression())
app.use(bodyParser.json())
app.use(hpp())
app.use(helmet.contentSecurityPolicy({
    defaultSrc: [ "'self'" ],
    scriptSrc: [ "'self'" ],
    styleSrc: [ "'self'" ],
    imgSrc: [ "'self'" ],
    connectSrc: [ "'self'", 'ws:' ],
    fontSrc: [ "'self'" ],
    objectSrc: [ "'none'" ],
    mediaSrc: [ "'none'" ],
    frameSrc: [ "'none'" ]
}))
app.use(helmet.xssFilter())
app.use(helmet.frameguard('deny'))
app.use(helmet.ieNoOpen())
app.use(helmet.noSniff())

const renderFullPage = (html) => {
  let head = Helmet.rewind()
  let link = config.env === 'development' ? '' : `<link rel="stylesheet" href="/static/app.bundle.css">`
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      ${head.title.toString()}
      ${head.meta.toString()}
      <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
      ${link}
    </head>
    <body>
      <div id="mount">${html}</div>
      <script async src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDQsIvpFVFW8KUWijDmsUDseWdSDvI90IQ&extension=.js'></script>
      <script async src="/static/vendor.bundle.js"></script>
      <script async src="/static/app.bundle.js"></script>
    </body>
    </html>
  `
}

if (config.env === 'development'){
  const compiler = require('webpack')(webpackCfg)
  const { publicPath } = webpackCfg.output;
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: publicPath,
    noInfo: true
  }))
  app.use(require('webpack-hot-middleware')(compiler))
} else {
  app.use('/static', express.static(config.paths.dist(), {
    maxAge: '1y'
  }));
}

// SSR as middleware
app.use((req, res) => {
  const store = configureStore()

  match({ routes: routes, location: req.originalUrl }, (err, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (err) {
      console.error('ROUTER ERROR:', err)
      res.status(500).end('Internal server error')
    } else if (!renderProps) {
      res.status(404).end('Not found')
    } else {
      const appComponent = (
        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>
      )
      const appHtml = renderToStaticMarkup(appComponent)
      res.send(renderFullPage(appHtml))
    }
  })
})

export default app;
