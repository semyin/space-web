const express = require('express')
const next = require('next')
const {createProxyMiddleware} = require('http-proxy-middleware')

const devProxy = {
  '/api': {
    target: 'http://localhost:5735',
    pathRewrite: {
      '^/api': '/'
    },
    changeOrigin: true
  }
}

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // 不论什么环境下都代理
  Object.keys(devProxy).forEach((context) => {
    server.use(createProxyMiddleware(context, devProxy[context]))
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
