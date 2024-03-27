const { defineConfig } = require('@vue/cli-service')
module.exports = {
  configureWebpack: {
    output: {
      libraryTarget: 'system'
        },
        devServer: {
          port: 5056
      }
  },
  transpileDependencies: [
    'vuetify'
    ],

}
