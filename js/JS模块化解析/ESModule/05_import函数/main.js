
// 1.从part1.js中导入了值时，part1会先解析完，再执行当前文件之后的代码
// import { name, sayName } from './part1' 
// console.log('开始执行main中的代码')
// console.log(name)
// sayName()

// 2.import函数：不让导入的文件阻塞当前文件中代码的执行
// import函数的返回值是一个promise，then中的就是part1文件中导出的值
import('./part1').then(res => {
    console.log('res', res)
})

// 3.import有一个mate属性，mate是一个对象，mate.url是当前文件的的路径
console.log(import.mate, import.mate.url)

