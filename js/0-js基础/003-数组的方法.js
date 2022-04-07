
// Array.prototype.join()


Array.prototype.reduce(callback, initialValue)
function callback(pre, cur, index, arr){
    // ......
}
// 回调函数第一次执行时，pre 和 cur的取值有两种情况：
// 如果调用reduce()时提供了initialValue，pre取值为initialValue，cur取数组中的第一个值；
// 如果没有提供 initialValue，那么pre取数组中的第一个值，cur取数组中的第二个值。

// 如果数组为空且没有提供initialValue，会抛出TypeError 。
// 如果数组仅有一个元素（无论位置如何）并且没有提供initialValue， 或者有提供initialValue但是数组为空，那么此唯一值将被返回并且callback不会被执行。













