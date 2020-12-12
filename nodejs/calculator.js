const calc = require('./calc'); // import another class or method or variable

const first = parseInt(process.argv[2]) || 0;
const next = parseInt(process.argv[3]) || 0;
const action = process.argv[4];

const result = calc.calculator(first,next,action);
console.log(result);