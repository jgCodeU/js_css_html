const iterableObj = {
  person: ["zhangsan", "lisi", "wangwu"],
  [Symbol.iterator]: function() {
    console.log("Symbol-iterator", this);
    let index = 0;
    return {
      next: () => {
        if (index < this.person.length) {
          return { done: false, value: this.person[index++] };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  },
};

const iterator = iterableObj[Symbol.iterator];
// // console.log(iterator);
// console.log(iterator().next())
// console.log(iterator().next())
// console.log(iterator().next())

const iterator2 = iterableObj[Symbol.iterator]();
// // console.log(iterator);
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())



