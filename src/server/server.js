import React from 'react'
import Express from 'express'
import { renderToStaticMarkup } from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import { Provider } from 'react-redux';
import createLocation from 'history/lib/createLocation'

import configureStore from '../shared/store/configureStore'
import routes from '../shared/routes'

const app = Express()
const port = 3000

const renderFullPage = (html) => {
  return `
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
      <title>Express Global Solutions</title>
    </head>
    <body>
      <div id="mount">${html}</div>
      <script src="/static/bundle.js"></script>
    </body>
    </html>
  `
}

if (process.env.NODE_ENV === 'development'){
  const webpackCfg = require('../../webpack.config')
  const compiler = require('webpack')(webpackCfg)
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackCfg.output.publicPath
  }))
  app.use(require('webpack-hot-middleware')(compiler))
}

app.use(Express.static('../assets/'));

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

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
