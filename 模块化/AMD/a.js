// 作用:定义模块
define(function (require) {
    // require 接收的就是 require 实例；可以用导入其他 模块

    // 在 a 模块中导入b 模块
    var b = require('./b.js');
    console.log('导入b',b);
    var m = '23421'
    setTimeout(() => console.log(m,'a.js'), 1000);
});