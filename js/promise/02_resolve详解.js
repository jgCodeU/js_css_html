
//给resolve传入不同的值
//（1）普通的值或者对象：当前promise的状态变为fullfiled
//（2）传入一个promise ：当前promise的状态由传入的promise状态决定，而且，传递的值也由传入的promise来决定
//（3）传入一个对象，并且这个对象实现了then方法，那么这个then方法会被执行，且该then方法决定当前primise的状态及传出的值



//（2）给resolve函数传入一个promise：当前promise的状态由传入的promise状态决定，而且，传递的值也由传入的promise来决定
// const p1 = new Promise((resolve, reject) => {
//     resolve('p1-resolve')
// })
// new Promise((resolve, reject) => {
//     console.log('---------')
//     resolve(p1)
//     // reject()
// }).then((res) => {
//     console.log("res", res)
// }, (err) => {
//     console.log("err", err)
// })

// (3)传入一个对象，并且这个对象实现了then方法，那么这个then方法会被执行，且该then方法决定当前primise的状态及传出的值
const obj = {
    name:'zhangsan',
    then: function() {
        console.log('对象实现then方法')
        // resolve('对象实现then方法resolve')
        // reject('对象实现then方法reject')
    }
}
new Promise((resolve, reject) => {
    resolve(obj)
}).then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})


