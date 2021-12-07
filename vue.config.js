// vue.config.js
module.exports = {
  lintOnSave: true,
  devServer: {
    host: '0.0.0.0',
    port: 8091,
    https: false,
    hotOnly: false,
  },
  configureWebpack: { 
		output: { 
			globalObject: 'this', 
		}, 
  },
  /*
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue-audio-visual/'
  : '/'
  */
}