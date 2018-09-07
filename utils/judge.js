
/**
 * 判断对象类型
 */
const judge = {}
const types = [
        'Object', 'Array', 'String', 'Number', 'Boolean',
        'Function', 'Date', 'RegExp', 'Null'
    ]

types.map(type => {
    judge[`is${type}`] = (obj) => {
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
})

module.exports = judge





