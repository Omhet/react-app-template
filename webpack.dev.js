const { merge } = require('webpack-merge');
const { config, stats } = require('./webpack.common');

module.exports = merge(config, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        hot: true,
        port: 9000,
        stats,
    },
});
