// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
//   minux(a, b) {
//     return a - b;
//   }
//   multiple(a, b) {
//     return a * b;
//   }
//   divide(a, b) {
//     return a / b;
//   }
// }
// module.exports = Calculator;

//alternate way to write a class
module.exports = class {
  add(a, b) {
    return a + b;
  }
  minux(a, b) {
    return a - b;
  }
  multiple(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
};
