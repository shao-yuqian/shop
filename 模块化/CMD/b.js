console.log('执行了b.js');
var num = 5
setTimeout(()=>console.log(num,'b.js'),500)
module.exports = num