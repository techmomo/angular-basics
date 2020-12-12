var str = process.argv[2];
console.log(str);
//
var num1 = parseInt(process.argv[3]) || 0; // assign default values in case the user didnt press a desired value
console.log(num1);
var num2 = parseInt(process.argv[4]) || 0;
console.log(num2);
console.log("SUM IS : " + (num1 + num2));
var getMessage = function (_msg) {
    if (_msg === void 0) { _msg = 'Default value'; }
    console.log(_msg);
};
getMessage();
