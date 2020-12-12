
//Number
// String
// Boolean
// Array

//var or let or const
// var - has global scope.... 
//let - has block level Scope...
// const - static value ... it is a fixed value

// JS -- 
// 1. Using JS for HTML Validations / UI --- i.e. Js in html pages with forms and all (bootstrap, jquery, extjs)--- 
            //  Frameworks - Angular / React / Ember / Vue (They rely heavily on Node Js/ npm)

// 2. Using js for building Server Side / Back end --- in Node Js --- This is a competitor for JAVA/PHP/ASP.NET

// building blocks of jS
// no type safety --
var emp = 10;
emp = 'Hello';
emp = {
    id: 1,
    name : 'Mohsin'
}
if(true){
    let j = 10;
    const k = 11; // fixed value we cannot modify it 
    var i = 15;
}
//console.log(`J is ${j}`);
//console.log(`K is ${k}`);
console.log(`I is ${i}`);
let str = JSON.stringify(emp); // JSON to String conversion
console.log(str);
console.log(JSON.parse(str)); // String to JSON conversion



