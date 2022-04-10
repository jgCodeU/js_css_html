// 1. asyn函数返回值：promise对象
// 2. await只能用在async函数中
//

async function test() {
  let awaitRes = await Promise.reject("错误了");
  console.log('awaitRes', awaitRes)
}

test()
  .then((res) => {
    console.log("success", res);
  })
  .catch((err) => {
    console.log("出错了:", err);
  });
// 学习try...catch
