// 编写一个迭代器
// const iterator = {
//   next: function () {
//     return { done: false, value: "123" };
//   },
// };

// 数组
const name = ["zhangsan", "lisi", "wangwu"];

//创建访问数组的迭代器
let index = 0
const nameIterator = {
  next: function () {
    if( index < name.length) {
        return { done: false, value: name[index++] }
    } else {
        return { done:true, value: undefined }
    }
  },
};

console.log(nameIterator.next())
console.log(nameIterator.next())
console.log(nameIterator.next())
console.log(nameIterator.next())
console.log(nameIterator.next())

