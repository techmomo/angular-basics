const Operations = require('./operations');

const calc = (first,next,action)=>{
    const operate = new Operations(first,next); // create object for class with parameterised constructor
    console.log('Calculator Method');

    switch(action){
        case 'ADD':
                return operate._add();
        case 'DIFF':
                return operate._diff();
        case 'MUL':
                return operate._mul();
        default:
            return first + next;
    }
}
const square = (num)=>{
    return num * num;
}

module.exports = {
    calculator : calc, // exporting as an object with custom name
    square
}
