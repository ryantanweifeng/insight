// process.env.VUE_APP_API_ENDPOINT = 'http://localhost:8000';
// process.env.VUE_APP_VERSION = require("./package.json").version;
// process.env.NODE_ENV = "production";



module.exports = {
  
  publicPath: "/insight/",
 

  transpileDependencies: ["vuetify"],

  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    proxy: {
      "/api": {
        // target: process.env.NODE_ENV === "production"?
        // 'http://localhost:8000':'/',
        target: "http://localhost:8000",

        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/api": "/api" },
        logLevel: "debug",
        disableHostCheck: true,
      },
      "/static": {
        target: "http://localhost:8000",

        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/static": "/static" },
        logLevel: "debug",
        disableHostCheck: true,
      },
    },
  },
};
