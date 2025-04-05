const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/events?program_type=game',
    createProxyMiddleware({
      target: 'https://api-461776259687.us-west2.run.app',
      changeOrigin: true,
    }),
  )
}