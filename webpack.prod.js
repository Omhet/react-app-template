const { merge } = require('webpack-merge');
const { config } = require('./webpack.common');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(
    merge(config, {
        mode: 'production',
    })
);
