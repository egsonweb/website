import React from 'react'
import Express from 'express'
import { renderToStaticMarkup } from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import { Provider } from 'react-redux';
import createLocation from 'history/lib/createLocation'

import webpackCfg from '../webpack.config'
import configureStore from '../src/redux/store/configureStore'
import routes from '../src/routes'
import config from '../config'

const app = Express()

const renderFullPage = (html) => {
  const link = config.env === 'development' ? '' : `<link rel="stylesheet" href="/static/app.bundle.css">`
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
      <title>${config.site_title}</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
      ${link}
    </head>
    <body>
      <div id="mount">${html}</div>
      <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDQsIvpFVFW8KUWijDmsUDseWdSDvI90IQ&extension=.js'></script>
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
  app.use('/static', Express.static(config.paths.dist()));
}

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
