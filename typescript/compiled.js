console.log('First TS File');
function sayHello() {
    console.log('Hello');
}
sayHello();
// es6
var message = function (_msg) {
    console.log("Hello " + _msg);
};
message('Mohsin');
var num = 10;
console.log(num);
//num = 'Hello'; // invalid operation fails the logic
console.log(num);
console.log('Second TS File');
var getMsg = function (_msg) {
    return _msg;
};
getMsg('Hello Second');

const html = "<span id=\"top\">";
const html1 = '<span id="top">';
const html1 = "<span id='top'>";