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
