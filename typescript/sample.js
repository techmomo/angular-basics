"use strict";
// var num :number; // for numbers
// var str:string // for strings
// var isValid:boolean // for booleans
// var mix:number | string ; // for both nums & strings
// mix = 1;
// mix = 'str';
// //mix = true;
exports.__esModule = true;
// var arrNum:number[] | string[];
// //arrNum= ["Str",10,"str",10];
// var alw;
// alw = ''
// alw = 10
// var tpls = [1,"Bob",true];
// // custom types
// interface I{
//     id:number
//     name:string
// }
// var custom:I;
// //custom=""; // not allowed
// custom={
//     id:1,
//     name: 'xyz'
// }
// let myTupl:[string,boolean]; // this is my tuple
// myTupl=['TOm',true];
// myTupl=['Tom',10,true];
// myTupl=['Tom'];
// myTupl=[true];
// let myAny:any[]; // this is using any data type
// myAny=[10];
// myAny=['TOm',true,true];
// myAny=['Tom',10,true];
// myAny=['Tom'];
// myAny=[true];
// // enums
// enum iPhone{
//     Six,
//     SixS,
//     X
// }
// let phones:iPhone;
// phones=''; /// not valid allows only values available in enum
// phones = null // 
// phones= iPhone.Six;
// let jk:number = myAny[0]; 
// let someval:unknown;
// jk=someval;
// someval = 10;
// someval = 'Test';
// someval = true;
// let userNams:Array<string>; // using generics instead of valid data type
// userNams=["JO","TO"]
function test() {
    // while(true){
    // }
    var arr;
    arr[0] = 10;
    arr.forEach(function (i) { return console.log(i); });
    for (var i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
    while (true) {
    }
    console.log("Test");
}
function noReturn() {
    console.log("Test");
}
var num = [11];
//let str2:unknown = num as string;
console.log(typeof num);
var num1 = 10;
var str3 = num1; // using as operator
var num2 = "12";
var str4 = num2;
var num3 = "12";
var str5 = num3;
function sampleF(i, j, k) {
    return 0;
}
sampleF(1, 1, 'Test');
sampleF(1, undefined, '');
var arr = ["Helo"];
var arr1 = [1, 12];
//sampleF(arr);
//sampleF(arr1);
function add(a, b) {
    console.log(a + b);
}
add("Hello", "World");
add(12, 11);
// rest parameters
function restSample(i) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    console.log(nums.join(" "));
}
restSample(10, 11, 12, 14);
restSample(10, -1, 9);
var emp1 = {
    email: 'momo@tech.com',
    getEmployee: function () {
        return "hello";
    }
};
emp1.email;
emp1.getEmployee();
var mohsin = {
    user: {
        id: 1,
        name: "Tech",
        email: "ee@gg.com"
    },
    // getUser : ()=>{
    //         return "";
    // },
    getUser: function () {
        return "";
    }
};
console.log(mohsin.user);
console.log(mohsin.getUser());
