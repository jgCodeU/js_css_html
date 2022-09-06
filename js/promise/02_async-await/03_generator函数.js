// 在定义一个函数的时候，在函数名前面加上`*`，此时这个函数就变成了一个`generator`函数。
// 例如：
// function* gen() {}

// yield 基本使用
// function* gen() {
//     yield console.log(1)
//     yield console.log(2)
//     yield console.log(3)
// }
// const g = gen()
// g.next()
// g.next()
// g.next()

// next方法返回值
// function* gen() {
//     yield 1
//     yield 2
//     yield 3*3
// }
// const g = gen()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// function* gen() {
//     yield 1
//     yield 2
//     yield 3*3
//     return 10
// }
// const g = gen()
// console.log(g.next()) // { value: 1, done: false }
// console.log(g.next()) // { value: 2, done: false }
// console.log(g.next()) // { value: 9, done: true }
// console.log(g.next()) // { value: 10, done: true }

// 调用next函数时传参，这个参数是yield的返回值。
// function* gen(param) {
//     console.log(param)
//     const param1 = yield 1
//     console.log(param1)
//     const param2 = yield 2
//     console.log(param2)
//     const param3 = yield 3*3
//     console.log(param3)
//     return 10
// }
// const g = gen('-1')
// g.next('00') 
// g.next('11')
// g.next('22')
// g.next('33')

// promise和next传参结合使用
// function createPromise(param) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const res = param * 2
//             resolve(res)
//         }, 1000);
//     })
// }
// function* gen() {
//     const res1 = yield createPromise(1)
//     const res2 = yield createPromise(res1)
//     const res3 = yield createPromise(res2)
//     return res3
// }
// const g = gen()
// g.next().value.then(res => {
//     console.log(res)
//     g.next(res).value.then(res => {
//         console.log(res)
//         g.next(res).value.then(res => {
//             console.log(res)
//         })
//     })
// })

// 实现async-await
// 简单实现
// function createPromise(param) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const res = param * 2
//             resolve(res)
//         }, 1000);
//     })
// }
// function* gen() {
//     const res1 = yield createPromise(1)
//     const res2 = yield createPromise(res1)
//     const res3 = yield createPromise(res2)
//     return res3
// }

// function myAsyncFun(genFun) {
//     return function() {
//         return new Promise((resolve, reject) => {
//             const g = genFun()
//             g.next().value.then(res => {
//                 console.log(res)
//                 g.next(res).value.then(res => {
//                     console.log(res)
//                     g.next(res).value.then(res => {
//                         resolve(res)
//                     })
//                 })
//             })
//         })
//     }
// }
// const asyncFun =  myAsyncFun(gen)
// asyncFun().then(res => {
//     console.log('res', res)
// })

// 完善代码
// function createPromise(param) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const res = param * 2
//             resolve(res)
//         }, 1000);
//     })
// }
// function* gen() {
//     const res1 = yield createPromise(1)
//     const res2 = yield createPromise(res1)
//     const res3 = yield createPromise(res2)
//     return res3
// }

// function myAsyncFun(genFun) {
//     return function() {
//         return new Promise((resolve, reject) => {
//             const g = genFun()
//             function loop(arg) {
//                 // let result
//                 let nextRes = g.next(arg)
//                 let { value, ifDone } = nextRes.done
//                 console.log('nextRes', nextRes)
//                 if(ifDone) {
//                     resolve(value)
//                 } else {
//                     // loop()
//                     return Promise.resolve(value).then(val => loop(val))
//                 }
//             }
//             loop()
//         })
//     }
// }
// const asyncFun =  myAsyncFun(gen)
// asyncFun().then(res => {
//     console.log('res', res)
// })



function createPromise(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = param * 2
            resolve(res)
        }, 1000);
    })
}
function* gen() {
    const res1 = yield createPromise(1)
    const res2 = yield createPromise(res1)
    const res3 = yield createPromise(res2)
    return res3
}

function generatorToAsync(generatorFn) {
    return function() {
      const gen = generatorFn.apply(this, arguments) // gen有可能传参
  
      // 返回一个Promise
      return new Promise((resolve, reject) => {
  
        function go(key, arg) {
          let res
          res = gen[key](arg) // 这里有可能会执行返回reject状态的Promise
  
          // 解构获得value和done
          const { value, done } = res
          if (done) {
            // 如果done为true，说明走完了，进行resolve(value)
            return resolve(value)
          } else {
            // 如果done为false，说明没走完，还得继续走
  
            // value有可能是：常量，Promise，Promise有可能是成功或者失败
            return Promise.resolve(value).then(val => go('next', val), err => go('throw', err))
          }
        }
  
        go("next") // 第一次执行
      })
    }
  }
  
  const asyncFn = generatorToAsync(gen)
  
  asyncFn().then(res => console.log(res))









