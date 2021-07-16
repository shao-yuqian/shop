define(function(){
    var m = new Date().getTime();
    setTimeout(() => console.log(m,'b.js'), 1000);
    return m;
})