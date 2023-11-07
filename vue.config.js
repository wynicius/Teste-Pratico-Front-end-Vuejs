{import('@vue/cli-service').ProjectOptions}

module.exports = {
  transpileDependencies: [],
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5298',
        changeOrigin: true
      }
    }
  }
}