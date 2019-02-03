const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'material-notifications',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [{
      test: /\.(ts|js)x?$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/react']
      },
      exclude: /node_modules/
    }]
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ]
}
