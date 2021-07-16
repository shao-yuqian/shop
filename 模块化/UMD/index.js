console.log('index.js执行了');
// const a = require('./a.js');
// const b= require('./b.js');


// require(['./a.js','b.js'],function(a,b){
//     console.log(a);
//     console.log(b);
// })


(function (self, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        const a = require('./a.js');
        const b = require('./b.js');

    } else if (typeof define === 'function' && define.amd) {
        require(['./a.js', 'b.js'], function (a, b) {
            console.log(a);
            console.log(b);
        })
    } else {

        console.log(self.umdModule);
    }
})(this)


// umd 实现方案
// 通过立即执行函数；传入运行环境，
// 判断 运行环境 node 支持 module 变量  浏览器 支持defined
// 编写不同的代码
// 最后都不行 将模块放在全局上