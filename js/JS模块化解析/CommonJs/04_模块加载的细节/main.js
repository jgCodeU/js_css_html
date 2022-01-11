
console.log('mian第一段')

// 模块第一次被require时，其中的代码会被立即执行一次
require("./part")

// 模块被多次引入时，会缓存，最终只加载（运行）一次
require('./part')
require('./part')

console.log('main第二段')
