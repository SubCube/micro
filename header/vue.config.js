const { defineConfig } = require('@vue/cli-service')
module.exports = {
  configureWebpack: {
    output: {
      libraryTarget: 'system'
        },
        devServer: {
          disableHostCheck: true,
            port: 5056,
            public: '0.0.0.0:5056'
        },

  },
  transpileDependencies: [
    'vuetify'
    ],
  publicPath: "/"

}
