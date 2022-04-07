// 有耗时较长的同步代码时：
let end = new Date().getTime();
let start = new Date().getTime();
let count = 0
function fun0() {
  console.log("fun0")
}
function fun1() {
  console.log("fun1")
}
function fun2() {
  console.log("fun2")
}
function fun3() {
  console.log("fun3")
}
function fun4() {
  console.log("fun4")
}
funArr = [fun0, fun1, fun2, fun3, fun4]
funArr[0]()
// setInterval(() => {
//   count++;
//   console.log("count",count)
// }, 1000);

setInterval(() => {
  // 耗时较长的操作
  let i = 0;
  while (i++ < 2500000000) {
    if(i === 100000) {
      count ++
    }
  };
  console.log(count)
  funArr[count]()
}, 1000);





