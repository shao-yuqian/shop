# es6新特性

- let const 与 var 的区别

  ```
  1. var是声明变量，会产生变量提升，let，const不会变量提升。
  2. let,const声明的变量在同一个作用域中不能存在重复声明。
  3. let const 声明的变量没有变量提升,变量不声明不能使用。
  4. const 声明的常量不能被修改，let 为变量。
  5. 当const赋值为引用类型数据，可以修改引用类型数据。
  6. 在Es6中 typeof并不是百分百准确的。
  7.**let const会形成暂时性死区**
  ```

- 详细介绍promise 

  ```html
  1. promise是为了解决 回调地狱代码可读性差，异步间嵌套，代码维护困难。
  2. promise是一个对象，需要创建实例才能使用他，let p = new Promise();
  3. promise对象有三种状态:pending未完成状态，resolve完成成功状态，reject完成失败状态，resolve();执行的是.then的回调函数，reject();执行的是.then的第二个回调函数或者是catch的回调函数。
  4. Promise()中的.then()方法处理异步的函数，.catch()用来捕获then上面的任意一个错误。
  5. **原型上方法then执行改变状态，catch捕获所有错误，then返回新的promise，then也可以执行下一个promise任务，支持.then通过链式调用完成多个异步任务**
  6. **静态方法：all race resolve reject等，all处理并发业务，所有的都成功执行then，race 多个promise中有一个成功执行then，resolve 将状态变为已完成，reject将状态变为已拒绝**
  ```

- promise 中那些是异步的那些是同步的
  ```
  1. new Promise()中方回调函数是同步的。
  2. .then() catch(）的回调函数是异步的。
  ```


- 如何解决回调地狱代码可读性差

  ```
  利用promise对象。
  ```


- 谈谈你对 async awiat 的理解

  ```
promise中的.then有时候太多，也会容易乱，代码不好管理，这时使用async，await函数。
  
async 函数返回值是promise。
  
  async 方法体中代码 同步执行， await 是异步执行,在同一个async 函数中.执行await函数时 需要等待一个await 执行完毕后,才能执行下一个await,以及下一行代码。
  
  await只能在async中使用。
  async await同步写法异步程序。
  await 后面需要跟promise实例：
  	async 返回的 ----->await返回值 return
  	new Promise ----->await 返回值resolve实参
  	then返回的promise ------> await返回值then中函数的return
  ```


- 说一下class 的作用

  ```
  
  
  **实例化创建对象。extends继承。construct构造器，当class 类执行时，触发construct构造器。super 触发父类中的构造器。static 关键字定义静态方法和静态方法**
  ```
  
  


- class 中super 你是怎么应用的

  ```
  先是利用extends来继承父类，再使用super()方法调用父类中construct构造器中的属性和方法。可直接使用super.父类方法使用父类中的方法。
  
  触发父类的构造器；在子类中调用父类的静态方法
  ```

  

- es6 对象扩展有那些内容

  ```
...{},展开对象中所有的键值对，...[]，展开数组中的元素。
  
  解构赋值，对象属性简写，扩展运算符
  ```


- 异步编程语言进化的过程是什么？

  ```
  回调函数----> Promise -----> generater函数 ------->async,await
  ```

- 请说出箭头函数有什么特点

  ```
  1. 可以代替匿名函数。
  2. 形参可以设置默认值
  3. 箭头函数中没有this，使用上一层的this
  4. 箭头函数中没有arguments，用reset参数代替
  ```


## 以下程序谁先输出 为什么？

~~~js
setTimeOut(()=>{//宏任务
    //执行慢的
    console.log("1111")
},0)
let p = new Promise((r,j)=>{
    console.log('33333');
    r();
})
p.then(()=>{//微任务
    //执行慢的
    console.log('2222');
})
/*
	执行结果:33333，2222，1111
	分析：为setTimeOut()中的函数是执行慢的，会先执行promise，promise对象一经声明，便直接执行，这时打印33333，r()执行.then()中的回调打印2222，最后执行setTimeOut中函数，打印1111.
	先同步后异步，异步中先微任务、后宏任务
*/
~~~

请写出下面程序的输出结果，为什么？
~~~js

for(var i = 0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },0)
}
/*
执行结果:5个5
分析：因为i变量是var声明的一个全局变量，导致变量污染，for循环时执行块的，setTimeout中函数是执行慢的，导致打印结果都是每个for循环执行完毕后的值，打印5个5.



*/
~~~


~~~js
for(var i = 0;i<5;i++){
    (function(i){
        setTimeout(()=>{
            console.log(i)
    
        },0)
    })(i)
}
/*
执行结果:0，1，2，3，4
分析：与上方不同的是，这里(function(i){})(i)形成一个闭包解决了变量污染的问题，同时利用立即执行函数，使其与for循环同步执行，所以结果打印0，1，2，3，4
*/
~~~

~~~js

for(let i = 0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },0)
}
/*
执行结果：0，1，2，3，4
分析：这里使用let对i进行声明变量，解决变量污染，而且每一次的for执行都是一个作用域，彼此之间互不干扰，打印的都是自己的i，所以输出0，1，2，3，4。
*/
~~~


### 判断下面this 输出结果是什么？并写出为什么？
~~~js
function a(){
    var user = "追梦子";
    console.log(this.user); 
    console.log(this);
}
a();
/*
执行结果:undefined，window()
分析：因为this是a();触发的，a()是window触发的，所以他是全局的，this指向window,而全局中并没有声明user变量，所以this.user为undefined。
*/
~~~

~~~js
function a(){
    var user = "追梦子";
    console.log(this.user);
    console.log(this);　　
}
window.a()
/*
执行结果:undefined，window()
分析：因为this是a();触发的，a()是window触发的，所以thsi指向window,而全局中并没有声明user变量，所以this.user为undefined。
*/
~~~

~~~js
var o = {
    user:"追梦子",
    fn:function(){
        console.log(this.user); 
    }
}
o.fn();
/*
执行结果:追梦子
分析：fn()是对象o触发的，所以this指向对象o，this.user为o.user，所以结果为追梦子
*/
~~~

~~~js
var o = {
    user:"追梦子",
    fn:function(){
        console.log(this.user); 
    }
}
window.o.fn();
/*
执行结果:追梦子
分析：在前面加window和不加是一样的，fn()是对象o触发的，所以this指向对象o，this.user为o.user，所以结果为追梦子
*/
~~~

~~~js
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); 
        }
    }
}
o.b.fn();
/*
执行结果:12
分析：fn()是对象b触发的，，所以this指向的是b,所以this.a为b.a为12
*/
~~~

~~~js
var o = {
    a:10,
    b:{
        fn:function(){
            console.log(this.a); 
        }
    }
}
o.b.fn();
/*
执行结果:undefined
分析：fn()是对象b触发的，所以this指向的是b,所以this.a为b.a为undefined。
*/
~~~

~~~js
var o = {
    a:10,
    b:{
        fn:function(){
            console.log(this.a); 
        }
    }
}
o.b.fn();
/*
执行结果:undefined
分析：fn()是对象b触发的，所以this指向的是b,所以this.a为b.a为undefined。
*/
~~~

~~~js
function Fn(){
    this.user = "追梦子";
}
var a = new Fn();
console.log(a.user); 
/*
执行结果:追梦子
分析：因为函数是new触发的，所以this指向实例化的对象a，打印的a.user就是this.user，结果为追梦子
*/
~~~

~~~js
function fn()  
{  
    this.user = '追梦子';  
    return {};  
}
var a = new fn;  
console.log(a.user);
/*
执行结果:undefined
分析：因为函数是new触发的，所以this指向实例化的对象a，而函数中有return返回值，返回的是一个对象，log打印的为return的返回值，对象中没有user属性，所以返回的是undefined。
*/
~~~

~~~js
function fn()  
{  
    this.user = '追梦子';  
    return function(){};
}
var a = new fn;  
console.log(a.user);
/*
执行结果:undefined
分析：因为函数是new触发的，所以this指向实例化的对象a，而函数中有return返回值，返回的是一个函数，log打印的为return的返回值，函数中没有user属性，所以返回的是undefined。
*/
~~~

~~~js
function fn()  
{  
    this.user = '追梦子';  
    return 1;
}
var a = new fn;  
console.log(a.user);
/*
执行结果:1
分析：因为函数是new触发的，所以this指向实例化的对象a，而函数中有return返回值，返回的是一个数1，log打印的为return的返回值，所以返回的是1。
因为函数是new触发的，所以this指向实例化的对象a，而函数中有return返回值，返回的是一个数字1，不是数组对象或函数，this.user为a.user,结果是追梦子。
*/
~~~

~~~JS
  var that=this;
        (function(){
            console.log(this===that)
        })()
        setTimeout(() => {
            console.log(this===that)
        })
  /*
执行结果:true true 
分析：因为this 是var声明的全局变量，所以this指向window，this是that的赋值，两者全等，所以结果都是true
*/
~~~

~~~JS
 var obj={
            name:'hty',
            getName:function(){
                console.log(this.name)
            }
        }
        var otherObj={
            name:'hml'
        }
        var name='upupup'
        obj.getName()//hty
        obj.getName.call();//upupup
        obj.getName.call(otherObj);//hml
        obj.getName.apply();//upupup
        obj.getName.apply(otherObj);//hml
        obj.getName.bind(this)();//upupup
        obj.getName.bind(otherObj)();//hml
/*
执行结果:
分析：第一个是由对象obj触发的，this指向obj，this.name为obj.name值为hty
	第二个是由call触发的，call中没有参数，this指向window，值为upupup
	第三个是由call触发的，call中有参数，this指向otherObj，值为hml
    
*/
~~~


~~~JS
  var globalObject = this;
        var foo = (() => this);
//箭头函数没有this，指向window
        console.log(foo() === globalObject); 
	//foo是箭头函数，返回值为this，this指向window，所以为true
        var obj = {foo: foo};
        console.log(foo.call(obj) === globalObject); 
//true
        foo = foo.bind(obj);
        console.log(foo() === globalObject)
//true
/*
执行结果:
分析：
*/
~~~