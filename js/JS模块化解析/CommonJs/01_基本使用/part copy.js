const name = 'zhangsan'
const age = 21
function foo(){
    console.log('执行foo')
}
const money = '¥237847364738984'
// exports.money = money
// console.log('1111111', module.exports === exports)
//1.导出方案 module.exports
exports.money = money
// module.exports = {
//     name,
//     age,
//     foo
// }
// console.log('2222222', module.exports === exports)
module.exports.name = name
module.exports.age = age
module.exports.foo = foo
// exports.money = money
// exports.like = '篮球'
// exports.like = '篮球'



