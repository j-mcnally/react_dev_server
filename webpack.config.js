import WebPack from 'webpack'
import Path from 'path'


export default (function(env) {

  process.env.BABEL_ENV = env;

  return {
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ["react"]
          }
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    },
    entry: ['./static/src/js/app.js'],
    devServer: {
      inline: true,
      hot: true,
      contentBase: "./static/dist",
    },
    plugins: [
      new WebPack.HotModuleReplacementPlugin()
    ],
    output: {
      publicPath: '/',
      path: Path.join(__dirname, 'static', 'dist'),
      filename: Path.join(__dirname, 'static', 'dist', 'bundle.js')
    }
  }
})();
