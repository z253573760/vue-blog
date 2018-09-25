let _undefined;
console.log(_undefined); //undefined
const num = 1;
console.log(num); //1
const str = "helloworld";
console.log(str); //"helloworld"
const bool = false || true;
console.log(bool); //true
// 以上为基础类型 原始数据类型
const arr = [];
console.log(arr); //[]
const obj = { a: 1 };
console.log(obj); //{ a: 1 };
function name(params) {
  return params;
}
console.log(name);
// 以上为引用类型

console.log(null === false); //false
console.log(null === true); //false
console.log(undefined === false); //false
console.log(undefined === true); //false
console.log(undefined === null); //false
console.log(undefined === undefined); //true
console.log(null === null); //true
/**
 * null表示空指针对象  且typeof(null) == 'object'
 * undefined 表示声明未定义
 */
const _null = null;
let __undefined;
if (_null || __undefined) {
  console.log("null 和 undefined 在逻辑运算符中均为false");
}
console.log("-----------------");
console.log(1 === Number(1));
var a = Number(1); // 1
var b = new Number(1); // Number {[[PrimitiveValue]]: 1}
var c = 1;
console.log(typeof a); // number
console.log(typeof b); // object 由构造函数构建的是一个Object
console.log(typeof c); // number
console.log(a === b); // false

/**
 * 每个函数都有一个prototype属性，
 * 这个属性是指向一个对象的引用，
 * 这个对象称为原型对象，原型对象
 * 包含函数实例共享的方法和属性，
 * 也就是说将函数用作构造函数调用
 * （使用new操作符调用）的时候，
 * 新创建的对象会从原型对象上继承属
 * 性和方法。不像传统的面向对象语言，
 * Javascript的继承机制基于原型，而
 * 不是Class类。
 */
function Bar() {
  let a = 1; // 私有属性
  // 私有方法
  const fn = function() {
    console.log(a);
  };
}
const bar = new Bar();
console.log(bar.a); //undefined
console.log(bar.fn); //undefined
/**
 * 把私有变量变成静态类型变量
 * 但是从构造函数中实例出来的
 * 对象还是没办法拿到 属性和方法
 */
function Bar2() {
  Bar2.a = 1; // 私有属性
  // 私有方法
  Bar2.fn = function() {
    console.log(a);
  };
}

Bar2.speak();
console.log(Bar2.a); //1
console.log(Bar2.fn); //func
const bar2 = new Bar2();
console.log(bar2.a); //undefined
console.log(bar2.fn); //undefined
/**
 * 接下来实例出2个对象
 * 只对一个 实例进行属性的更改
 * 发现另外一个实例的属性没有被改变
 */
function Bar3() {
  this.a = 1;
  this.fn = function() {};
}
const bar3_1 = new Bar3();
const bar3_2 = new Bar3();
bar3_2.a = 100;
bar3_2.fn = [];
console.log(bar3_1.a); //100
console.log(bar3_1.fn); //[]
console.log(bar3_2.a); //1
console.log(bar3_2.fn); //func
/**
 * 换一种写法
 * 把构造函数的属性
 * 挂到ProtoType中
 * 结果一致
 * prototype的作用 :
 * 我们在创建对象之后来改变对象的属性和方法
 * 所有 实例共享prototype上的所有属性
 * 并且每个实例改变自身属性的同时，与其他实例互不影响
 * 当我们引用别人的 类时 有时候会需要添加一些属性
 * 就可以直接使用prototype方法 为每个通过类实例出来的
 * 对象添加属性和方法
 */
function Bar4() {}
Bar4.prototype.a = 1;
Bar4.prototype.fn = function() {};
console.log(Bar4.prototype);
const bar4_1 = new Bar4();
const bar4_2 = new Bar4();
bar4_2.a = 100;
bar4_2.fn = [];
console.log(bar4_1.a); //1
console.log(bar4_1.fn); //func
console.log(bar4_2.a); //100
console.log(bar4_2.fn); //[]
