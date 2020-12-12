
var str:string = process.argv[2];
console.log(str);
//
var num1:number =  parseInt(process.argv[3])|| 0; // assign default values in case the user didnt press a desired value
console.log(num1);

var num2:number = parseInt(process.argv[4]) || 0;
console.log(num2);

console.log(`SUM IS : ${num1+num2}`);

const getMessage = (_msg:string ='Default value')=>{ // specify default values for method params
    console.log(_msg);
}
getMessage();

