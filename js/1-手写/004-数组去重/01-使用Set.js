// 去除数组中重复的元素
function foo(arr) {
    return [ ...new Set(arr)]
}

let arr1 = [1,1,2,3,3,4,2,4]
console.log(foo(arr1))