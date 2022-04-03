const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log(1111, app);

  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://proud-art-ae58.plutoczy.workers.dev", //后台服务器地址
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
