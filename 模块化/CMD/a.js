console.log('执行a.js');
var num = 1;
setTimeout(()=>{console.log(num,'a.js');},1000)


// 导出模块
// 一个文件只能导出一次
module.exports = num;