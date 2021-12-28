async function foo() {
  console.log("foo-start");
  
  console.log('中间代码')

  console.log("foo-end");
  // 1.返回一个值
  // return 123

  // 2.返回一个thenable
  // return {
  //   then: function(resolve, reject) {
  //     resolve('哈哈哈')
  //   }
  // }

  // 3.返回一个promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('heheheheh')
    }, 1000);
  })
}

// 1.异步函数的返回值一定是一个promise
// console.log(foo());

const promise = foo()
promise.then(res => {
    console.log('promise-then', res)
})

