function createIterator(arr) {
  let index = 0;
  return {
    next: function () {
      //   let index = 0;
      if (index < arr.length) {
        return { done: false, value: arr[index++] };
      } else {
        return { done: true, value: undefined };
      }
    },
  };
}

const names = ["zhangsan", "lisi", "wangwu"];
const nums = [123, 234, 345];

const namesIter = createIterator(names);
console.log(namesIter.next());
console.log(namesIter.next());
console.log(namesIter.next());
console.log(namesIter.next());
console.log(namesIter.next());
const numsIter = createIterator(nums);
console.log(numsIter.next())
console.log(numsIter.next())
console.log(numsIter.next())
console.log(numsIter.next())
console.log(numsIter.next())

// 创建一个无限的迭代器
function createInfinityIterator() {
  let index = 0
  return {
    next: function () {
      return { done: false, value: index++ }
    }
  }
}

const infinityIterator = createInfinityIterator()
console.log(infinityIterator.next())
console.log(infinityIterator.next())
console.log(infinityIterator.next())
console.log(infinityIterator.next())
console.log(infinityIterator.next())

