const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)
  //thay đổi tên file
  
  singleSpaWebpackConfig.output.filename = 'tin.js'

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig
}