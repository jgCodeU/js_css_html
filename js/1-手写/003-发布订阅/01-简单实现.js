// https://www.cnblogs.com/chris-oil/p/8733249.html

// 发布者
let publisher = {}
// 订阅缓存列表
publisher.list = []
// 添加订阅
publisher.addListen = function(fn) {
    publisher.list.push(fn)
}
// 发布
publisher.publish = function() {
    for(let i=0; i<publisher.list.length; i++) {
        publisher.list[i].apply(this, arguments)
    }
}

// 订阅
publisher.addListen(function(param1, param2){
    console.log(111, param1, 222, param2)
})
publisher.addListen(function(param1, param2, param3) {
    console.log(222, param2 , 333, param3)
})
publisher.publish('哈哈哈', '嘿嘿嘿', '参数三')
