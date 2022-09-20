// // 伪代码：
// // 1. 创建 XMLHttpRequest 实例
// const xhr = new XMLHttpRequest()
// // 2. 定义请求细节
// xhr.open('GET', 'url', true)
// // 3. 添加事件监听
// const handler = function(res) { console.log('handler', handler) }
// xhr.onreadystatechange(handler)
// // 4. 发送请求
// xhr.send(null)

// 请求实例：
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  // 通信成功时，状态值为4
  if (xhr.readyState === 4){
    if (xhr.status === 200){
      console.log('onreadystatechange-200', xhr.responseText);
    } else {
      console.error('onreadystatechange-!200', xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error('onerror', xhr.statusText);
};
xhr.open('GET', '/endpoint', true);
xhr.send(null);












