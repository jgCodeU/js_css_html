// function myDebounce(fun, delay = 300) {
//   let timeOutId = undefined;
//   let flag = true
//   return function () {
//     if(flag) {
//         fun()
//         flag = false
//     }
//     if (timeOutId) {
//       clearTimeout(timeOutId);
//     } else {
//       timeOutId = setTimeout(() => {
//         fun();
//         timeOutId = undefined
//       }, delay);
//     }
//   };
// }

// function P(name, age) {
//     this.name = name
//     this.age = age
// }
// function c() {
//     P.call(this, 'zhangsan', 20)
//     this.sport = 'run'
// }

// c.prototype = Object.create(p.prototype)
// c.prototype.contructor = c

// 1. 循环引用
// 2. 特殊类型的判断

// 层序遍历
// 动态规划

function levelOrder(root) {
  let res = [];
  if (!root) return res;
  let queue = [root];
  while (queue.length) {
    let arr = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      arr.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(arr);
  }
  return res;
}
