let PROMISE_STATUS_PENDING = "pennding";
let PROMISE_STATUS_FULFILLED = "fulfilled";
let PROMISE_STATUS_REJECTED = "rejected";
class MyPromise {
  constructor(exeFn) {
    // new MyPromise()执行的操作：
    // 1.初始化promise状态
    // 2.定义MyResolve和MyReject方法
    // 3.执行传入的函数
    this.status = PROMISE_STATUS_PENDING;
    const MyResolve = () => {
      // 控制promise的状态 
      if ((this.status = PROMISE_STATUS_PENDING)) {
        this.status = PROMISE_STATUS_FULFILLED;
      }
    };
    const MyReject = () => {
      // 控制promise的状态 
      if ((this.status = PROMISE_STATUS_PENDING)) {
        this.status = PROMISE_STATUS_REJECTED;
      }
    };
    exeFn(MyResolve, MyReject);
  }
}

const promise = new MyPromise((resolve, reject) => {
    console.log('创建promise对象')
    resolve()
}) 

// 总结：
// new MyPromise()执行的操作：
// 1.初始化promise状态
// 2.定义MyResolve和MyReject方法
// （1）MyResolve和MyReject方法的作用：控制promise的状态
// 3.执行传入的函数
