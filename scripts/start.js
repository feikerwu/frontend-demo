
const program = require('commander')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')

const devConfig = require('../config/webpack.dev.config')

/** 获取到项目的配置 */
const { args } = program.parse(process.argv)

const demoName = args[0]

const demoPath = path.resolve(process.cwd(), 'src', demoName)
const demoConfig = require(path.resolve(demoPath, 'config'))

const config = merge(devConfig, demoConfig, {
    entry: {
        app: path.resolve(demoPath, 'index.js')
    }
})

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.listen(8080, () => {
    console.log(`demo ${demoName} listening in port 8080`)
})

