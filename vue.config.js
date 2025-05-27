const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
const BASE_URL = process.env.NODE_ENV === 'production' ? './' : ''
const proxyHost = 'http://39.97.242.35:18080';

module.exports = {
  outputDir: 'static',
  publicPath: BASE_URL,
  indexPath: './index.html',
  assetsDir: '',

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_a', resolve('assets'))

    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  configureWebpack: config => {

    // 识别pdf文件
    config.module.rules.push({
      test: /\.pdf$/,
      use: [{
        loader: 'file-loader',
        options: {},
      }, ],
    })
  },


  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  lintOnSave: false, //process.env.NODE_ENV === 'development', // process.env.NODE_ENV === 'development'
  devServer: {
    host: 'localhost',
    port: 8101,
    open: true,
    hotOnly: false,
    proxy: proxyHost
  }
}
