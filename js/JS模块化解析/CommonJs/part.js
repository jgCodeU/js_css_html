const name = 'zhangsan'
const age = '18'
exports.name = name
exports.age = age
// module.exports = {
//     name,
//     age
// }
console.log('module-in-part', module)
require('./part')
