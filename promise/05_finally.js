//finally最终一定会执行,但是不能用来接收reject的信息或者resovle的信息
// const promise1 = new Promise((resolve, reject) => {
//     resolve(123)
// }).then(res => {
//     console.log(res)
//     return Promise.reject(456)
// }).catch(err => {
//     console.log(err)
// }).finally((res) => {
//     console.log('finally')
// })

// const promise1 = new Promise((resolve, reject) => {
//     resolve(123)
// }).then(res => {
//     console.log(res)
// }).finally((res) => {
//     console.log('finally')
// })


const promise1 = new Promise((resolve, reject) => {
    resolve(123)
}).finally((res) => {
    console.log('finally')
})



