var minify = {
  removeComments: true,
  collapseWhitespace: true,
  removeAttributeQuotes: true
  // more options:
  // https://github.com/kangax/html-minifier#options-quick-reference
}
module.exports = {
  hello: {
    name: 'hello',
    port: 3001,
    entry: {
      app: './src/main.js'
    },
    HtmlWebpackPlugin: {
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: minify,
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }
  },
  test: {
    name: 'test',
    name_cn: 'test',
    HtmlWebpackPlugin: {
      filename: 'index.html',
      template: 'src/templates/test.html',
      inject: true,
      minify: minify,
      chunksSortMode: 'dependency'
    },
    port: 3008,
    entry: { test: './src/entries/test.js' }
  }
}
