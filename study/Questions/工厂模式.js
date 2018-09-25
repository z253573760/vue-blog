function Student() {}
function Teacher() {}

function studentFactory() {
  return new Student();
}

function teacherFactory() {
  return new Teacher();
}
function school(type) {
  let factory = null;
  switch (type) {
    case "student":
      factory = studentFactory;
      break;
    case "teacher":
      factory = teacherFactory;
      break;
    default:
      throw "没有这个工厂";
  }
  return factory;
}
var _student = school("student")();
var _teacher = school("teacher")();
console.log(_student);
console.log(_teacher);
