
const path = require('path');
const srcPath = path.join(__dirname, '/../src');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = env => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    devServer: {
      inline: true,
      contentBase: './dist',
      port: 3333
    },
    context: path.resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {

      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react', 'stage-2']
          }
        }, {
          test: /\.(png|jpg|gif)$/,
          loader: "file-loader?name=img/img-[hash:6].[ext]"
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader!postcss-loader'
        },
        {
          test: /\.sass/,
          loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
        },
        {
          test: /\.scss/,
          loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        },
        {
          test: /\.less/,
          loader: 'style-loader!css-loader!less-loader'
        },
        {
          test: /\.styl/,
          loader: 'style-loader!css-loader!stylus-loader'
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader?limit=8192'
        },
        {
          test: /\.(mp4|ogg|svg)$/,
          loader: 'file-loader'
        }
      ],
    },
    plugins: [
      extractSass
    ]
  }
}