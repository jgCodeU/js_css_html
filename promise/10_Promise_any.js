const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('p1')
        reject('p1')
    }, 1000);
})
const p2 = new Promise((resolve, reject) => {
    // resolve('p2')
    reject('p2')
})
const p3 = new Promise((resolve, reject) => {
    // resolve('p3')
    reject('p3')
})

// 一直等到有resolve的promise产生之后，再执行resolve之后的操作
//如果所有的promise都是rejected，那么会传递出一个错误对象
Promise.any([p1, p2,p3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err, err.errors)
})