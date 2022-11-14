// 截流（throttle）
// 事件被触发后立即执行，如果在这n秒内又被触发，则不会生效。个人理解：第一次事件执行后，n秒后才能再执行。

function myThrottle(fun, delay = 300) {
  let flag = true;
  let args = arguments;
  return () => {
    if (!flag) {
      return;
    } else {
      flag = false;
      setTimeout(() => {
        fun.call(this, ...args);
        flag = true;
      }, delay);
    }
  };
}

window.addEventListener(
  "scroll",
  myThrottle(() => {
    console.log(111);
  }, 1000)
);
