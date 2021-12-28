// async function foo() {
//     console.log("foo-start");
    
//     console.log('中间代码')
    
//     // 异步函数中的异常，会被作为promise的reject的返回值，异常后续的代码仍然会执行
//     // throw new Error('err message')
//     throw new Error("error message")

//     console.log("foo-end");
// }
// // foo().catch(err => {
// //     console.log('catch-err', err)
// // })
// foo().catch(err => {
//     console.log('catch-err', err)
// })
// console.log('异常函数后续代码')


async function foo() {
    console.log("foo function start~")
  
    console.log("中间代码~")
  
    // 异步函数中的异常, 会被作为异步函数返回的Promise的reject值的
    throw new Error("error message")
  
    console.log("foo function end~")
  }
  
  // 异步函数的返回值一定是一个Promise
  foo().catch(err => {
    console.log("coderwhy err:", err)
  })
  
  console.log("后续还有代码~~~~~")











