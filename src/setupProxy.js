const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // change this to your backend API path
    createProxyMiddleware({
      target: "https://jmiggravasend-3d1d4676ff9f.herokuapp.com/", // change this to your backend server address
      changeOrigin: true,
    })
  );
};
