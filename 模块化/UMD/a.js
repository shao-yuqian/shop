console.log('a.js');


// var num = 123;
//         setTimeout(() => console.log(num), 1000)

//         // node
//         module.exports = num;

// // 浏览器
// define(function () {
//     var num = 123;
//     setTimeout(() => console.log(num), 1000)

//     return num
// });


(function (self, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        // 运行的 node 平台
        var num = 123;
        setTimeout(() => console.log(num), 1000)

        // node
        module.exports = num;
    } else if (typeof define === 'function' && define.amd) {
        // 运行在浏览器平台
        define(function () {
            var num = 123;
            setTimeout(() => console.log(num), 1000)
            return num
        });
    }else{
        // 什么环境都不是,直接将变量改在到全局上
        self.umdModule = factory();
    }
})(this,function(){
    var num = 123;
    return num
})