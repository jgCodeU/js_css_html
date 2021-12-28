function request() {
    return new Promise((resolve, reject) => {
        console.log('request')
        setTimeout(() => {
            // resolve('12321')
            reject(12321)
        }, 2000);
    })
}

// async function foo() {
//     const res1 = await request()
//     console.log('res1',res1)

//     const res2 = await request()
//     console.log('res2', res2)

// }
// foo()
// console.log('写在foo之后')

// 2.await之后跟上其他值
async function foo() {
    // (1)普通值
    // const res1 = await 123
    // console.log('res1:', res1)

    //（2）thenable
    // const res2 = await {
    //     then: function(resolve, reject) {
    //         resolve('跟上thenable')
    //     }
    // }
    // console.log('res2:', res2)

    // (3)promise
    // const res3 = await new Promise((resolve, reject) => {
    //     resolve('跟上promise')
    // })
    // console.log('res3:', res3)

    // (4)reject,会被作为整个函数的reject值返回，所以，在调用当前函数（foo）时，需要在其后用catch接收错误
    const res4 = await request()
    console.log('res4', res4)
}
foo().catch(res => {
    console.log('catch接收', res)
})
console.log('foo之后')

















