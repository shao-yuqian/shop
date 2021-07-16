//子模块之间可以相互导入的
// * as 变量 作用：导入文件中所有暴露内容
import * as vals from './b.js';
console.log('a.js');
let obj = {
    name:"123",
}
console.log("---------------分割线-----------------");
console.log(vals);
console.log(vals.foo); 
console.log(vals.b);
console.log(vals.default);
console.log(vals.c);
console.log("============分界线=============");

// 导出默认模块
//export default 一般导出 对象或者函数。一个文件 导出一个内容
export default obj;