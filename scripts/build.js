
const program = require('commander')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const prodConfig = require('../config/webpack.prod.config')

/** 获取到项目的配置 */
const { args } = program.parse(process.argv)

const demoName = args[0]

const demoPath = path.resolve(process.cwd(), 'src', demoName)
const demoConfig = require(path.resolve(demoPath, 'config'))

const config = merge(prodConfig, demoConfig, {
    entry: {
        app: path.resolve(demoPath, 'index.js')
    }
})


/**存在回调函数才会有打包 @todo */
webpack(config, (err, stats) => {
    // process.stdout.write(stats.toString({
    //     colors: true,
    // }))
})


// const config = require(path.resolve())
