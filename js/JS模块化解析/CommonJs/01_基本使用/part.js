
const name = 'zhangsan'
const age = 21
function foo(){
    console.log('执行foo')
}
const money = '¥237847364738984'
//1.导出方案 module.exports
module.exports = {
    name,
    age,
    foo
}
console.log('modulemodule', module)
require("./part.js")
require("./part.js")

