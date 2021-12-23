
// 1.Array
// const names = ['adc', 'bcd', 'def']
// // console.log((names[Symbol.iterator]))
// const iterator = names[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// for(item of names) {
//     console.log(item)
// }

// 2.Set/Map
// const set = new Set()
// set.add(123)
// set.add(234)
// set.add(345)
// const setIterator = set[Symbol.iterator]()
// console.log(setIterator.next())
// console.log(setIterator.next())
// console.log(setIterator.next())
// console.log(setIterator.next())
// for(item of set) {
//     console.log(item)
// }

//3.函数中的arguments
function foo(a ,b , c) {
    console.log(arguments[Symbol.iterator])
    for(item of arguments) {
        console.log(item)
    }
}
foo(1,2,3)







