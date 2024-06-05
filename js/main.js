var phoneBtn = document.getElementById("phoneBtn");
var closeBtn = document.getElementById("phoneClose");



phoneBtn.addEventListener("click", function() {
    document.getElementById("phone").style.display = "block";
}
)

closeBtn.addEventListener("click", function() {
    document.getElementById("phone").style.display = "none";
})

var inputElement = document.getElementById("search");
if(inputElement){
// 添加事件监听器
inputElement.addEventListener("keyup", function(event) {
    // 检查是否按下了回车键
    if (event.keyCode === 13) {
      // 这里可以执行回车键触发的操作
     window.location.href='./search.html'
    }
  });
  
}


var goBackLink = document.getElementById("goBackLink");
if(goBackLink){
// 添加点击事件监听器
goBackLink.addEventListener("click", function(event) {
    // 阻止默认行为，避免链接跳转
    event.preventDefault();
    
    // 使用 history 对象返回上一页
    history.back();
  });
}
