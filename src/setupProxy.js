const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log(1111, app);

  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://127.0.0.1:8787", //后台服务器地址
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
