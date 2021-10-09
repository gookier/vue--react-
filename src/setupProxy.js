const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/LC', {
        target : 'http://192.168.2.222:5000',
        changeOrigin : true,
        pathRewrite : {
            '^/LC' : '/'
        },
    }));
};