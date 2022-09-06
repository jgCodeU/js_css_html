class EventEmitter {
    constructor() {
        this.events = {}
    }
    // 注册订阅事件
    on(eventName, handler) {
        if(this.events[eventName]) {
            this.events[eventName].push(handler)
        } else {
            this.events[eventName] = [handler]
        }
    }
    // 删除订阅事件
    off(eventName, handler) {
        if(this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter((handlerItem) => {
                return handlerItem !== handler
            })
        } else {
            return
        }
    }
    // 执行订阅事件
    emit(eventName, ...arg) {
        this.events[eventName] && this.events[eventName].forEach(handlerItem => {
            handlerItem.apply(this, arg)
            // this.events[eventName].pop[handlerItem]
        }); 
    }
    // 只执行一次的订阅事件
    once(eventName, handler) {
        function exeOnce() {
            handler()
            this.off(eventName, exeOnce)
        }
        this.on(eventName, exeOnce)
    }
}

// 使用如下
const event = new EventEmitter();

const handle = (...rest) => {
  console.log(rest);
};

// event.on("click", handle); 
// event.emit("click", 1, 2, 3, 4); //[ 1, 2, 3, 4 ]

// event.off("click", handle);
// event.emit("click", 1, 2);

event.once("dbClick", () => {
  console.log(123456);
});
event.emit("dbClick"); // 123456
event.emit("dbClick");


