/**
 * 构建者模式
 *  es5
 */
function Student() {}

function BuildStudent() {
  this.student = new Student();
}
BuildStudent.prototype.setName = function(name) {
  this.student.name = name;
};
BuildStudent.prototype.setSex = function(sex) {
  if (sex != "男" && sex != "女") {
    throw "性别错误";
  }
  this.student.sex = sex;
};
BuildStudent.prototype.setHairLength = function(length) {
  if (
    (this.student.sex === "男" && length > 1) ||
    (this.student.sex === "女" && length > 25)
  ) {
    throw "头发太长";
  }
  this.student.length = length;
};
BuildStudent.prototype.build = function() {
  return this.student;
};
var builder = new BuildStudent();
try {
  builder.setName("灿灿");
  builder.setSex("男");
  builder.setHairLength(1);
  var student = builder.build();
} catch (err) {
  throw err;
}
console.log(student);
