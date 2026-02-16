// wrapper function
//console.log(arguments);
//console.log(require("module").wrapper);

//module exporting and importing
const C = require("./test-module-1.js");
const calc1 = new C();
console.log(calc1.add(10, 55));
console.log(calc1.minux(100, 43));
console.log(calc1.multiple(100, 43));
console.log(calc1.divide(100, 43));

// export shorthand
const calc2 = require("./test-module.2.js");
console.log(calc2.add(10, 55));
console.log(calc2.minux(100, 43));
console.log(calc2.multiple(100, 43));
console.log(calc2.divide(100, 43));
//alternate export shorthand
const { add, minux, multiple, divide } = require("./test-module.2.js");
console.log(add(10, 55));
console.log(minux(100, 43));
console.log(multiple(100, 43));
console.log(divide(100, 43));

//caching - only one log execute the other two are cache
require("./test-module.3.js")();
require("./test-module.3.js")();
require("./test-module.3.js")();
