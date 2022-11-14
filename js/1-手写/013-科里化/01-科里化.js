function curry(fun, ...arg) {
  let length = fun.length;
  let allArg = [...arg];
  let curryFun = function (...newArg) {
    allArg = [...allArg, ...newArg]
    if(allArg.length === length) {
        return fun(...allArg)
    } else {
        return curryFun
    }
  };
  return curryFun
}

function add(a, b, c, d) {
  return a + b + c + d;
}
console.log(curry(add, 1)(2,3,4))
