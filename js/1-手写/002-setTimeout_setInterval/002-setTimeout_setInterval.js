// setTimeout实现setInterval
function mySetInterval(fun, delay) {
  let timer = null;
  function interval() {
    fun();
    setTimeout(interval, delay);
  }
  interval();
  return {
    cancel: () => {
      clearTimeout(timer);
    },
  };
}
mySetInterval(() => console.log("mySetInterval"), 1000);

// function mySetInterval(fun, delay) {
//     setTimeout(() => {
//         mySetInterval(fun, delay)
//         fun()
//     }, delay)
// }

// mySetInterval(() => console.log('mySetInterval'), 1000)

// let startTime = new Date().getTime();
// let count = 0;
// let end = new Date().getTime()
// let start = new Date().getTime()
// setInterval(function () {
//  start = new Date().getTime()
//  console.log("上一任务结束——当前任务开始：",start - end)
// // 耗时较长的操作
//   let i = 0;
//   while (i++ < 2500000000);
//   count ++;
//   end = new Date().getTime()
// //显示当前任务实际执行时间与计划执行时间的差值
// //   console.log(

// //     // "count",
// //     // count,
// //     "与原设定的间隔时差了：",
// //     new Date().getTime() - (startTime + count * 1000),
// //     // a,
// //     "毫秒",
// //     "end:",
// //     end = new Date().getTime(),
// //   );
// }, 1000);

// 无耗时较长的同步代码时：
let end = new Date().getTime();
let start = new Date().getTime();
setInterval(function () {
  start = new Date().getTime();
  console.log("上一任务结束——当前任务开始：", start - end, "ms");
  end = new Date().getTime();
}, 1000);

// 有耗时较长的同步代码时：
let end = new Date().getTime();
let start = new Date().getTime();
setInterval(function () {
  start = new Date().getTime();
  console.log("上一任务结束——当前任务开始：", start - end, "ms");
  // 耗时较长的操作
  let i = 0;
  while (i++ < 2000000000);

  end = new Date().getTime();
}, 1000);

// setTimeout
function mySetInterval(fun, delay) {
  let timer = null;
  function interval() {
    //fun中的同步代码执行完之后，再开始定时
    fun();
    setTimeout(interval, delay);
  }
  interval();
  return {
    cancel: () => {
      clearTimeout(timer);
    },
  };
}
let end = new Date().getTime();
let start = new Date().getTime();
function shortCode() {
  start = new Date().getTime();
  console.log("short上一任务结束——当前任务开始：", start - end, "ms");
  end = new Date().getTime();
}
function longCode() {
  start = new Date().getTime();
  console.log("long上一任务结束——当前任务开始：", start - end, "ms");
  // 耗时较长的操作
  let i = 0;
  while (i++ < 2500000000);

  end = new Date().getTime();
}
// mySetInterval(shortCode, 1000);
mySetInterval(longCode, 1000);
