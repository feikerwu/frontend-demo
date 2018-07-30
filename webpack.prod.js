const common = require('webpack.common.js')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglify-js-plugin')

module.exports = merge(common, {
    devTool: 'inline-source-map',
    plugins: [
        new UglifyJSPlugin()
    ]
})





