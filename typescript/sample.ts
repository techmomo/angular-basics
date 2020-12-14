// var num :number; // for numbers
// var str:string // for strings
// var isValid:boolean // for booleans
// var mix:number | string ; // for both nums & strings
// mix = 1;
// mix = 'str';
// //mix = true;

import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

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


function test():never{
    // while(true){

    // }
    let arr:any[];
    arr[0] =10;
    arr.forEach(i=>console.log(i));
    for(let i=0;i<=arr.length;i++){
        console.log(arr[i]);
    }
    while(true){

    }
    console.log("Test");
}

function noReturn():void{
    console.log("Test");
}

let num:Array<number> = [11];
//let str2:unknown = num as string;
console.log(typeof num);

let num1:any = 10;
let str3:number = num1 as number; // using as operator

let num2:any = "12";
let str4:string = <string>num2;

let num3:unknown = "12";
let str5:string = <string>num3;

function sampleF(i:number,j:number,k:string):number{
    return 0;
}
sampleF(1,1,'Test');
sampleF(1,undefined,'');

let arr= ["Helo"];
let arr1 = [1,12];
//sampleF(arr);
//sampleF(arr1);

function add(a:any,b:any):void{
    console.log(a + b);
}

add("Hello","World");
add(12,11);

// rest parameters
function restSample(i:number,...nums:number[]){ // rest param will always be the last one 
    console.log(nums.join(" "));
}

restSample(10,11,12,14);
restSample(10,-1,9);

// interfaces
interface Employee{
    email:string,
    getEmployee():string
}

var emp1:Employee = {
    email: 'momo@tech.com',
    getEmployee :()=>{
        return "hello"
    }
}

emp1.email
emp1.getEmployee();

interface I1 {
    name:string
}
interface I2{
    id:number
}
interface User extends I1,I2{
    email:string
}

interface Employee1{
    user:User,
    getUser: ()=> string
}

var mohsin:Employee1 = {
    user:{
        id: 1,
        name: "Tech",
        email: "ee@gg.com"
    },
    // getUser : ()=>{
    //         return "";
    // },
    getUser: function (){
        return ""
    }
}
console.log(mohsin.user);
console.log(mohsin.getUser());

// assignment : I have an employee who is a User as well, 
// he works in a project & some basic profile details, 
// I would the object structure defined for this, I want to use Interfaces & Association 
// & anything else if need be
// 


//
interface MyArr{ // array type interfaces 
    [key:number]:number
}
interface Irr{
    nums:number[]
}

let _nums:MyArr = [12,14,5];
console.log(_nums[1]);
let _nums1:Irr ={ nums:[8,8] };  //[1,2];

// 
interface CallMe{ // function type interfaces - similar to functional interfaces in Java 8 or above
    (str:string):string
    //callMe: (str:string)=>string // well defined method -- method with proper name
}

let callMe:CallMe = (str:string)=>{
    return str;
}
console.log(callMe("Called Me!"));

// Functional Interface in Java 
//@FunctionalInterface
// interface I1{
//     String callMe(String str);
// }

// // define lambda
// String callMe = (str)->System.out.println(str);
// callMe("Called Me");