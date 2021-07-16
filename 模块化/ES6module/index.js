//import 导入模块
// import './a.js';

// 声明变量a 赋值 a.js 文件 export default 导出的内容
import a from './a.js';
import d from './b.js';

// 导入export 导出多个内容 没有default
//foo as syq 将foo变量重新命名为syq
import {foo as syq,b,c} from './b.js';
console.log(a);
console.log('index.js 执行了');
a.name = "hahahaha";
console.log(a);
console.log('----------分界线----------');
console.log(d);
syq();
console.log(b);
console.log(c);
