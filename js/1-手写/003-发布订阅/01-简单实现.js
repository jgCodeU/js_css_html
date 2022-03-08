// shoeObj: {
//     list:[],
//     listen: function, // 往list里面添加回调函数
//     trigger: function, // 发布消息（同时执行回调函数）
// }

// 定义发布者
let shoeObj = {}

// 缓存列表 存放订阅者的回调函数
shoeObj.list = []

// 增加订阅者
shoeObj.listen = function(fn) {
    shoeObj.list.push(fn)
}

// 发布消息
shoeObj.trigger = function() {
    for(let i = 0, fn; fn = this.list[i]; i++) {
        // console.log(arguments)
        fn.apply(this, arguments)
    }
}

// person1订阅
shoeObj.listen(function(color, size){
    console.log("person-111-颜色:", color, "尺码:", size)
})
// person2订阅
shoeObj.listen(function(color, size){
    console.log("person-222-颜色:", color, "尺码:", size)
})

shoeObj.trigger("黑色", 40)


