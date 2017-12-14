const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js')
const rimraf = require('rimraf');

rimraf(__dirname + 'dist/', e => {
    if (e) {
        throw e;
    }
    for (let libName in webpackConfig) {
        webpack(webpackConfig[libName], () => {
            console.log(`打包完成${libName}.js`);
        });
    }
});
