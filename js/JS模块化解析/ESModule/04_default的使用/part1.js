// 默认导出default

 const name = 'part1'
 function sayName() {
     console.log('我是part1')
 }

// 方式一：
// export {
//     name as default,
//     sayName
// }

// 方式二：
export default name
export { sayName }

// 注意：
// 1.一个文件中只能有一个默认导出




