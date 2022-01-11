// 在webpack环境下，CommonJs与ESModule相互引用

// 使用ESModule导入
import {name1, sayName1} from './part1'


// 使用CommonJS导入
const {name2, sayName2} = require('./part2')




