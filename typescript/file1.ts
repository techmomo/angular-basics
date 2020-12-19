export let msg:string = 'Hello World File 1';
export function add(num1:number,num2:number):void{
    console.log(num1 + num2);
}

//assignment
// I want to get all users in my project who have more than 7 years of experience in order of their experience
// e.g. if we have 4 users(10,8,2,3) in project 1 & 3 users(6,8,3) in project 2 -- it should give me 
//expected o/p users = {
//     project1: [ 8,10],
//     project2: [8]
// }