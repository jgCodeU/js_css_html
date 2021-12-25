function* foo(param) {
  console.log("-----111-----", param);
  try {
    yield 100;
  } catch(err) {
    console.log('异常信息', err)
    yield err
  }
  console.log("-----222-----");
  yield;
  console.log("-----333-----");
  yield;
  console.log("-----444-----");
  yield;
  yield;
  return 123;
}

const generator = foo();
generator.next();

// 第二段代码的执行(不用next，用throw的情况)，此时第二段没有执行，但是有返回值，相当于在一段代码的yield中抛出异常
// 其后再调用next，后面的代码将不会执行
console.log(generator.throw("errMessage"));
