// 放封装一个函数时，如果想让调用者知道函数内部发生了错误，则需要使用throw抛出错误
function sum(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        throw "parameters is error type"
    }
    return num1 + num2
}

console.log(sum('a',1))
console.log("后续代码继续执行")








