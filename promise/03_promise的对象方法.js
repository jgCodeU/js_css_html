// console.log(Object.getOwnPropertyDescriptors(Promise))


// 1.同一个promise多次调用then方法，所有的传入then的回调函数都会被执行
// const promi1 = new Promise((resolve, reject) => {
//     resolve('promi1-Resolve')
// })

// promi1.then((res) => {
//     console.log('res1',res)
// })
// promi1.then((res) => {
//     console.log('res2',res)
// })
// promi1.then((res) => {
//     console.log('res3',res)
// })

//2.给then方法传入的函数可以有返回值
//（1）返回一个普通值，那么这个值将会被当作一个新的promise的resolve值
// new Promise((resolve, reject) => {
//     resolve()
// }).then((res) => {
//     return {name: 'zhangsan'}
//     // return '哈哈哈哈哈哈'
// }).then(res => {
//     console.log('2--then',res)
// })

//（2）返回一个promise，则将这个新的promise作为then中返回的promise的rosolve的值
// new Promise((resolve, reject) => {
//     resolve('222')
// }).then((res) => {
//     console.log(res)
//     return new Promise((resolve, reject) => {
//         // resolve('返回一个promise')
//         reject('返回一个promise')
//     })
// }).then(res => {
//     console.log(res)
// }).catch((err) => {
//     console.log('catch',err)
// })

//(3)返回一个对象，且这个对象实现了then方法，那么then()新建的promise的状态及传出的值由对象实现的then方法来决定
// new Promise((resolve, reject) => {
//     resolve('333')
// }).then((res) => {
//     console.log(res)
//     return {
//         then: function(resolve, reject) {
//             // resolve('实现了then方法的对象')
//             reject('实现了then方法的对象')
//         }
//     }
// }).then((res) => {
//     console.log('res',res)
// }).catch((err) => {
//     console.log('catch', err)
// })


//总结：无论resolve什么值，或是then中的回调函数返回值是什么，
// then()都会新建一个promise对象，
// 并将then中回调函数的返回值作为新promise中resolve/reject的参数.


















