/**
 * 1构造器模式
 */
function Student1ES5(name, sex, age) {
  this.math = 100;
  this.english = 80;
  this.name = name;
  this.sex = sex;
  this.age = age;
  this.sumSubject = function() {
    return this.math + this.english;
  };
}
class Student1ES6 {
  constructor(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.math = 100;
    this.english = 80;
  }
  sumSubject() {
    return this.math + this.english;
  }
}
const cc1 = new Student1ES5("灿灿", "男", 18);
console.log(cc1);
const cc2 = new Student1ES6("灿灿", "男", 18);
console.log(cc2);
/**
 * 2 原型模式
 *   es6的没变化和构造器一样
 */
function Student2ES5(name, sex, age) {
  this.math = 100;
  this.english = 80;
  this.name = name;
  this.sex = sex;
  this.age = age;
}
Student2ES5.prototype.sumSubject = function() {
  return this.math + this.english;
};
class Student2ES6 {
  constructor(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.math = 100;
    this.english = 80;
  }
  sumSubject() {
    return this.math + this.english;
  }
}
console.log(Student2ES6);
