const path = require('path')

module.exports = {
    entry: {
        app: path.resolve('./', 'index.js')
    },
    output: {
        filename: '[name].bundle.[hash].js'
    }
}
