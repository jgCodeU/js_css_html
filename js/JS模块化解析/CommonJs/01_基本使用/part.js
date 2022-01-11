const name = 'zhangsan'
const age = 21
function foo(){
    console.log('执行foo')
}

//1.导出方案 module.exports
module.exports = {
    name,
    age,
    foo
}

