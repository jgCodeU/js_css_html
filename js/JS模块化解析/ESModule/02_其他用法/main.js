// 导入方式1:普通导入
// import { name ,num, sayName, Part1 } from "./part1.js"
// console.log('name', name)
// console.log('num', num)
// sayName()

// 导入方式2:起别名
// import { name as name1 ,num as num1, sayName as sayName1 } from './part1'
// console.log(name1, num1)
// sayName1()

// 导入方式3:将导出的所有内容放到一个标识符种
import * as part1 from './part1'
console.log(part1.name)





