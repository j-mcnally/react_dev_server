import config from './webpack.config.js'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

let port = process.env.PORT || 4200

config.entry.unshift('webpack/hot/dev-server');
config.entry.unshift(`webpack-dev-server/client?http://localhost:${port}/`);
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, config.devServer);
server.listen(port);
