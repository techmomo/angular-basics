const constants = require('./constants');
console.log('Hello Node');
function callMe(){
    console.log('Called Me');
    // there's no window /document /alerts / pop ups available in nodejs
}

const tryMe = ()=>{
    console.log('Tried Me');
}

callMe();
tryMe();

console.log(constants.users);