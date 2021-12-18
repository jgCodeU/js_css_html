const obj = {
    name: 'obj',
    foo: function () {
        this.age = 21
        console.log(this)
    }
}
obj.foo() //{ name: 'obj', foo: [Function: foo], age: 21 }

// 1.显式绑定 > 隐式绑定
obj.foo.apply({name: 'zhangsan'}) //{ name: 'zhangsan', age: 21 }
obj.foo.call({name: 'lisi'}) //{ name: 'lisi', age: 21 }

// 2.new绑定 > 隐式绑定
const newObj = new obj.foo() //{ age: 21 }

// 3.new不能和apply/call一起使用，但是可以和bind对比，new > bind
const fooBinded = obj.foo.bind({name: 'liming'})
new fooBinded() //{ age: 21 }

// 综上：new > bind/call/apply > 隐式绑定 > 默认绑定




















