// 事件被触发延迟n秒后执行，如果在这n秒内又被触发，则重新计时。 个人理解：最后一次事件经过n秒后执行。
function myDebounce(fun, delay = 300) {
  let timeOutId = undefined;
  return function () {
    const args = arguments;
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      fun.call(this, ...args); // 改变this指向为调用debounce所指的对象
    }, delay);
  };
}
window.addEventListener(
    "scroll",
    myDebounce(() => {
      console.log(111);
    }, 1000)
  );

// debounce
