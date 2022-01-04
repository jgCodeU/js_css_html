// 此文件为utils文件夹下所有工具函数中变量的统一出口

// 第一种导出方式
// import { add, sub } from './math.js'
// import { timeFormat, priceFormat } from './format.js'
// export {
//     add, 
//     sub,
//     timeFormat, 
//     priceFormat
// } 

// 第二种导出方式
// export { add, sub} from './math.js'
// export { timeFormat, priceFormat } from './format.js'

// 第三种导出方式
export * from './math.js'
export * from './format.js'


