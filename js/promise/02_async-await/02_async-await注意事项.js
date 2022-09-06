// 1-2-1.`await`只能在`async`函数中使用，不然会报错。
// function request(param) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const res = param *2
//             console.log(res)
//             resolve(res)
//         }, 1000);
//     })
// }
// function dataRequest() {
//     await request(10)
// }
// dataRequest()


// 1-2-2.如果`await`后面函数的返回值不是一个`promise`，则起不到排队的作用。
// function request(param) {
//     setTimeout(() => {
//         const res = param *2
//         console.log(res)
//     }, 1000);
// }
// async function dataRequest() {
//     await request(10)
//     await request(20)
//     await request(30)
// }
// dataRequest()


// 1-2-3.`async`函数的返回值是一个`fulfilled`状态的`promise`。
async function dataRequest() {}
console.log(dataRequest())


