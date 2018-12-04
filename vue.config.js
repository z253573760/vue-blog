// vue.config.js

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  runtimeCompiler: true, //是否使用包含运行时编译器的 Vue 构建版本
  baseUrl: process.env.NODE_ENV === "production" ? "/" : "/",
  // baseUrl: process.env.NODE_ENV === "production" ? "/" : "/",
  productionSourceMap: false, //不在production环境使用SourceMap
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== "production",
  configureWebpack: config => {
    //入口文件
    config.entry.app = ["babel-polyfill", "./src/main.js"];
    //删除console插件
    let plugins = [
      //只有打包生产环境才需要将console删除
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true
          },
          output: {
            // 去掉注释内容
            comments: true
          }
        },
        sourceMap: false,
        parallel: true
      })
    ];
    config.externals = {
      vue: "Vue",
      "vue-router": "VueRouter",
      axios: "axios",
      vuex: "Vuex"
    };

    if (process.env.VUE_APP_build_type == "production") {
      config.plugins = [...config.plugins, ...plugins];
    } else {
      //  config.plugins = [...config.plugins, ...plugins];
    }
  },
  //允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    //命名
    config.resolve.alias
      .set("SRC", resolve("src"))
      .set("ASSET", resolve("src/assets"))
      .set("VIEW", resolve("src/components/page"))
      .set("COMPONENT", resolve("src/components/common"))
      .set("UTIL", resolve("src/utils"))
      .set("SERVICE", resolve("src/services"));
    //打包文件带hash
    config.output.filename("[name].[hash].js").end();

    //为了补删除换行而加的配置
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // modify the options...
        options.compilerOptions.preserveWhitespace = true;
        return options;
      });
  },
  devServer: {
    //跨域
    port: 8010, // 端口号
    open: false, //配置自动启动浏览器
    //  host: "localhost",
    proxy: {
      // 配置跨域处理 可以设置多个
      "/api": {
        target: "http://119.29.165.40",
        //target: "http://localhost:7001",
        changeOrigin: true
      }
    }
  }
};
