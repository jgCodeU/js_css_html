const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1')
    }, 1000);
})
const p2 = new Promise((resolve, reject) => {
    // reject('p2')
    resolve('p2')
})
const p3 = new Promise((resolve, reject) => {
    resolve('p3')
})

// 等所有的promise都resolve()之后再拿到结果,输出结果的顺序与all中数组元素的顺序相同
//如果在所有promise都resolve之前，有一个promise被reject(),则按照reject()的结果执行
Promise.all([p1, p2,p3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})