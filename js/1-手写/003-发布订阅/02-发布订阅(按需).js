// https://www.cnblogs.com/chris-oil/p/8733249.html


// 数据结构
// let publisher = {
//   list: { key1: [], key2: [] },
//   addlisten: function(){},
//   pulish: function(){},
// }

// 发布者对象
let publisher = {}
// 回调缓存列表
publisher.list = []
// 扩充缓存列表
publisher.addListen = function(key, fn) {
    if(!this.list[key]){
        this.list[key] = []
    }
    this.list[key].push(fn)
    // console.log(this)
}
// 发布消息
publisher.publish = function() {
    let key = arguments[0]
    // console.log('发布消息', this, '--', key, '--', arguments)
    if(!this.list[key]) {
        return
    }
    for(let j=0; j<this.list[key].length; j++) {
        this.list[key][j].apply(this, arguments)
    }
}

// 添加订阅
publisher.addListen('red', function(param1, param2) {
    console.log(111, param1, param2)
})
publisher.addListen('black', function(param1, param2) {
    console.log(222, param1, param2)
})

// 发布
publisher.publish('red', 'red-1', 'red-2')
publisher.publish('black', 'black-1', 'black-2')


