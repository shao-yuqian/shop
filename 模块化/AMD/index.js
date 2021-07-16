// 主入口模块
// require() 导入注册的子模块
// 参一:数组;数组中元素, 模块路径 
// 参二:回到函数
require(['./a.js', './b.js'], function (moduleA, moduleB) {
    // 形参一: 接收 a.js 模块内容
    // 形参二:接收b.js 模块中内容
    console.log(moduleB,'index.js');
})