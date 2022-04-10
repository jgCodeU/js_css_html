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
    // resolve('p3')
    reject('p3')
})

// 只要有一个promise的状态改变，那么就以这个promise的状态来执行后续代码(但是其他未执行完的promise仍然会执行完)
//注意，race中数组元素的顺序会影响最终的结果
//数组中放在前面的promise会先被执行
Promise.race([p1, p2,p3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})