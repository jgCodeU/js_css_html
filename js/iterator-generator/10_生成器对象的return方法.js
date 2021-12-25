function* foo(param) {
  console.log("-----111-----", param);
  const n = yield 100;
  console.log("-----222-----", n);
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

// 第二段代码的执行(不用next，用return的情况)，此时第二段没有执行，但是有返回值，相当于在一、二段代码之间增加了'return n'
// 其后再调用next，后面的代码将不会执行
console.log(generator.return("第二段"));
