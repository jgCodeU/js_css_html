// bind实现
// fun.bind(thisObj)
// 核心思想：对函数进行包装，包装时可利用call或者apply方法，注意：new调用的情况要考虑

Function.prototype.myBind = function (thisObj, ...args) {
    if (!thisObj) {
      thisObj = window;
    }
    let _this = this; // 保存调用 myBind 的函数
    let funName = Symbol();
  
    let res = function (...resArgs) {
      // 判断 new 调用
      if (this instanceof _this === true) {
        this[funName] = _this;
        this[funName](...[...args, ...resArgs]);
      } else {
        thisObj[funName] = _this;
        thisObj[funName](...[...args, ...arguments]);
        delete thisObj[funName];
      }
    };
    // 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
    // 实现继承的方式: 使用Object.create
    res.prototype = Object.create(this.prototype);
    return res;
  };
  
  function fun() {
    this.name = "funfunfun";
  }
  let person = { age: 21 };
  let newFun = fun.myBind(person);
  console.log("newFun", new newFun());
  console.log("person", person);
  
  // let person1 = { age: 22 };
  // let newFun1 = fun.bind(person1);
  // console.log('newFun-1', new newFun1)
  // console.log('person-1', person1)


// 内置bind函数测试
// function foo(colorParam, sportParam) {
//     this.color = colorParam
//     this.sport = sportParam
//     console.log(this)
// }
// const thisObj = {
//     name: 'hahaha',
//     age: 24
// }
// // foo.bind(thisObj, 'skyBlue111', 'swim111')()
// // foo.bind(thisObj)('skyBlue222', 'swim222')
// // foo.bind(thisObj, 'skyBlue111')( 'swim222')
// let foo1 = foo.bind(thisObj, 'skyBlue111', 'swim111')
// new foo1()




