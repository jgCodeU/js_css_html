const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1')
    }, 1000);
})
const p2 = new Promise((resolve, reject) => {
    reject('p2')
    // resolve('p2')
})
const p3 = new Promise((resolve, reject) => {
    resolve('p3')
})

// 等所有的promise都变化之后，再将所有结果放入一个数组
//但是，保存结果的数组中存放的元素是对象，会标志对应的promise是fulfilled还是rejected

Promise.allSettled([p1, p2,p3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})