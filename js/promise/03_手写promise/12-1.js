let PROMISE_STATUS_PENDING = "pennding";
let PROMISE_STATUS_FULFILLED = "fulfilled";
let PROMISE_STATUS_REJECTED = "rejected";
class MyPromise {
  constructor(exeFn) {
    this.status = PROMISE_STATUS_PENDING;
    const MyResolve = (result) => {
      // 控制promise的状态
      if ((this.status = PROMISE_STATUS_PENDING)) {
        this.status = PROMISE_STATUS_FULFILLED;
        this.value = result;
      }
    };
    const MyReject = (reason) => {
      // 控制promise的状态
      if ((this.status = PROMISE_STATUS_PENDING)) {
        this.status = PROMISE_STATUS_REJECTED;
        this.value = reason;
      }
    };
    exeFn(MyResolve, MyReject);
  }
  then(resolveFn, rejectFn) {
    if (this.status === PROMISE_STATUS_FULFILLED) {
      resolveFn(this.value);
    }
    if (this.status === PROMISE_STATUS_REJECTED) {
      rejectFn(this.value);
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log("创建promise对象");
  //   resolve("resolve-Promise");
  setTimeout(() => {
    reject("reject-Promise");
  }, 0);
});

promise.then(
  (res) => {
    console.log(res);
  },
  (reason) => {
    console.log(reason);
  }
);
