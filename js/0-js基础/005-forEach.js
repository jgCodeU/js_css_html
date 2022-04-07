// let arr = ['a', 'b', 'c', 'd']
// arr.forEach((item, index, thisArr) => {
//     console.log(item, index, this), arr
// })


// let arr = ['a', 'b', 'c', 'd']
// arr.forEach((item, index, thisArr) => {
//     console.log(item, index, this)
// }, [1,2,3])


// let arr = ['a', 'b', 'c', 'd']
// arr.forEach(function(item, index, thisArr) {
//     console.log(item, index, this)
// }, [1,2,3])

let arr = ['a', 'b', 'c', 'd']
arr.forEach(function(item, index, thisArr) {
    console.log(item, index, this)
})

