## ES6

- 声明变量（let，const，var）

  1. var声明的变量会变量提升，let，const没有。
  2. let ，const声明的变量会形成块级作用域。
  3. let声明的是变量，const声明的是常量不能被修改。当const赋值为引用类型数据，可以修改引用类型数据。
  4. let,const声明的变量在同一个作用域中不能存在重复声明。
  5. typeof() 不是百分百正确的。
  6. let，const会形成暂时性死区。

- 对象扩展

  1. 展开运算符：...

     ```html
     ...{},可以展开对象中所有的key:value键值对
     注意：如果展开的是对象，只能将...obj放在对象中，不能放在数组中。存在展开运算符的对象，可以继续展开。
     
     ...[],可以展开数组中的所有元素
     
     ```

  2. 解构赋值

     ```js
     适合当变量的名字与对象下的属性名字一样的时候，
     声明三个变量，并分别赋值，赋值为options对象的属性的值
     let { url, method, data } = options;
     let url = options.url;
     let method = options.method;
     let data =options.data;
     
     ```

  3. 对象属性简写

     ```js
     当属性的名字和变量的名字相同时，可以属性简写
     let userID = 'syq';
     let password = "1254";
     let user = {
     	userID,
         password,
     }
     console.log(user);
     ```

- 对象扩展的api

- symbol类型

- 箭头函数

- 异步程序

- promise对象

- async，await函数

- class类

- 模块化

- set和map数据结构

