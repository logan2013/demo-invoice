const env = process.env.NODE_ENV;
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './src/index.js'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: env === 'production' ? [

  ] : [
      new ExtractTextPlugin({
        filename: '[name].css'
      })
    ]
};