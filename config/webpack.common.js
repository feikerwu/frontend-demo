const path = require('path')

/**默认情况下html会包括所有的js文件 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webpack = require('webpack')

module.exports = {
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        // 用于服务器
        publicPath: '/'
    },

    plugins: [
        new CleanWebpackPlugin(['../dist']),
        new HtmlWebpackPlugin({
            title: 'test',
            template: path.resolve(__dirname, 'index.template.html')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],


    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.vue', '*'],
        alias: {
            '@util': path.resolve(__dirname, '..', 'utils')
        }
    }
}