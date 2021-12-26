const promise1 = new Promise((resolve, reject) => {
    reject('reject1')
}).then(res => {
    console.log('then-1',res)
}).catch( err => {
    console.log('catch-1',err)
}).then(res => {
    console.log('then-2',res)
}).catch(err => {
    console.log('catch-2', err)
})

//catch的返回值是一个fullfilled状态的promise