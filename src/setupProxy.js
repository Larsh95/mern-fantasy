5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/logsys", {
      target: "http://localhost:4000", // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/logsys": "",
      },
      headers: {
        Connection: "keep-alive",
      },
    })
  );
  app.use(
    createProxyMiddleware("/cc", {
      target: "http://localhost:4001", // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/cc": "",
      },
      headers: {
        Connection: "keep-alive",
      },
    })
  );
};
