// 生成器替换迭代器的核心思想：函数返回一个对象，重复调用对象的next方法，可遍历指定对象的每一个元素

// 案例一：迭代一个数组============================================================
// 第一种写法
// function* createArrayIterator(arr) {
//     let index = 0
//     console.log(index)
//     yield arr[index++] 
//     console.log(index)
//     yield arr[index++] 
//     console.log(index)
//     yield arr[index++] 
// }
// const arr = [111, 222, 333]
// const arrayIterator = createArrayIterator(arr)
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())


// 第二种写法
// function* createArrayIterator(arr) {
//   for (item of arr) {
//     yield item
//   }
// }
// const arr = [111, 222, 333]
// const arrayIterator = createArrayIterator(arr)
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())


// 第三种写法：yield* (注意：yield* 后面的对象必须是可迭代的)
// const arr = [111, 222, 333]
// function* createArrayIterator(arr) {
//     yield* arr
// }
// const arrayIterator = createArrayIterator(arr)
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())

// 案例二：迭代一个范围内的数字（给出起始值和终止值） ============================================================
//10——20
// 第一种写法
// function createRangIterator(start, end) {
//     let index = start
//     return {
//         next: function() {
//             if(index <= end) {
//                 return { value: index++, done: false }
//             } else {
//                 return { value: undefined, done: true }
//             }
//         }
//     }
// }
// const rangeIterator = createRangIterator(10,20)
// let loop = 0
// while( loop < 13 ) {
//     loop++
//     console.log(rangeIterator.next())
// }

// 第二种写法：生成器yield
// function* createRangIterator(start, end) {
//     let index = start
//     while(index <= end){
//         yield index++ 
//     }
// }
// const rangeIterator = createRangIterator(10, 20)
// let loop = 0
// while( loop < 13 ) {
//     loop++
//     console.log(rangeIterator.next())
// }


// 案例三：
class Classroom {
    constructor(adress, name, students) {
        this.adress = adress
        this.name = name
        this.students = students
    }

    entry(newStudent) {
        this.students.push(newStudent)
    }

    //要使创建出来的对象可迭代，对象必须有迭代器
    // [Symbol.iterator] = function* () {
    //     yield* this.students
    // }
    //或
    *[Symbol.iterator]() {
        yield* this.students
    }
    
}
const classroom = new Classroom('3楼', '计算机教室', ['zhangsan', 'lisi', 'wangwu'])
for(item of classroom){
    console.log(item)
}














