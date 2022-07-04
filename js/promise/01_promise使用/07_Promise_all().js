const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1')
        // reject('p1')
    }, 1000);
})
const p2 = new Promise((resolve, reject) => {
    resolve('p2')
    // reject('p2')
    
})
const p3 = new Promise((resolve, reject) => {
    resolve('p3')
    // reject('p3')
})

const p4 = 123

// 等所有的promise都resolve()之后再拿到结果,输出结果的顺序与all中数组元素的顺序相同
//如果在所有promise都resolve之前，有一个promise被reject(),则按照reject()的结果执行
//***注意：Promise.all()后面的then/catch重的回调函数不一定会等all中的promise状态全部变化后才执行(有reject就会立即往后执行)。
//***当all中的某个promise状态变为reject或者all中的promise全变为fulfilled时，其后的then/catch就会立即执行***//
Promise.all([p1, p2,p3, p4]).then(res => {
    console.log('res', res, p1)
}).catch(err => {
    console.log('err', err, p1)
    setTimeout(() => {
        console.log(p1)
    }, 0);
})