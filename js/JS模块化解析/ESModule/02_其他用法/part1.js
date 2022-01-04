// 1.第一种导出方式：export 声明语句
// export const name = 'part1'
// export const num = 1
// export function sayName() {
//     console.log('My name is part1')
// }
// export class Part1 {}


// 2.第2种导出方式：声明和export导出分开
const name = 'part1'
const num = 1
function sayName() {
    console.log('My name is part1')
}
class Part1 {}
export {
    name,
    num,
    sayName,
    Part1
}

// 3.第3种导出方式：导出时起别名
// const name = 'part1'
// const num = 1
// function sayName() {
//     console.log('My name is part1')
// }
// class Part1 {}
// export {
//     name as part1Name,
//     num as part1Num,
//     sayName as part1SayName,
//     Part1 as part1Part1
// }

