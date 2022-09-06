// 作用：用同步的方式，执行异步操作
// 例如：有3个请求需要一次进行，而且第2、第3个请求都要用到前一个请求返回的结果
// promise实现：
// function request(param) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const res = param *2
//             console.log(res)
//             resolve(res)
//         }, 1000);
//     })
// }
// function dataRequest(param) {
//     console.log('promise实现：')
//     request(10).then(res1 => {
//         request(res1).then(res2 => {
//             request(res2).then(res3 => {
//                 console.log('请求结束', res3)
//             })
//         })
//     })
// }
// dataRequest()

// async-await实现
function request(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(param)
            const res = param *2
            console.log(res)
            resolve(res)
        }, 1000);
    })
}
async function dataRequest() {
    console.log('async-await实现：')
    const res1 = await request(10)
    const res2 = await request(res1)
    const res3 = await request(res2)
    console.log('数据请求结束', res3)
}
dataRequest()

