interface Address{
    zip?:number
}
interface UserActions{
    getUser: ()=>void
}

interface User extends Address,UserActions{
    id:number,
    name:string,
    email?:string // optional 
}
const emp1:User={
    id: 1,
    name: 'Bob',
    zip: 110001,
    getUser : ()=>{
        console.log(name);
    }
}

const emp2:User = {
    id: 2,
    name: 'John',
    email: 'joe@gg.com',
    getUser : ()=>{
        "Hello ";
    }
}

console.log(emp1.name);
console.log(emp2.email);

emp2.getUser();

var _operand:number|string; // multiple data types supported
_operand =10;
_operand ='hello'; 

var _nums:number[]; // array
_nums = [10,2,3,4,8];

console.log(_nums[1]); // get element at first index

interface Operation{
    add:(first:number,next:number)=>number;
}

var sum:Operation={
    add: (first:number,next:number)=>{
        return first + next;
    }
}
console.log('SUM is :');
console.log(sum.add(_nums[1],_nums[0]));

const evenNums =_nums.filter(number=>number %2==0).forEach(n=>console.log(n));  // filter method
interface Emp{
    id:number,
    name:string
}
//const evenNum = _nums.find(number=>number %2==0);
let vals:Emp[] = [
    {
        id: 1,
        name: 'Bob'
    },
    {
        id: 2,
        name: 'Adam'
    },
    {
        id: 3,
        name: 'John'
    }
]

vals.forEach(emp=>{
    console.log(emp.name);
});

