var emp1 = {
    id: 1,
    name: 'Bob',
    zip: 110001,
    getUser: function () {
        console.log(name);
    }
};
var emp2 = {
    id: 2,
    name: 'John',
    email: 'joe@gg.com',
    getUser: function () {
        "Hello ";
    }
};
console.log(emp1.name);
console.log(emp2.email);
emp2.getUser();
var _operand; // multiple data types supported
_operand = 10;
_operand = 'hello';
var _nums; // array
_nums = [10, 2, 3, 4, 8];
console.log(_nums[1]); // get element at first index
var sum = {
    add: function (first, next) {
        return first + next;
    }
};
console.log('SUM is :');
console.log(sum.add(_nums[1], _nums[0]));
var evenNums = _nums.filter(function (number) { return number % 2 == 0; }).forEach(function (n) { return console.log(n); }); // filter method
//const evenNum = _nums.find(number=>number %2==0);
var vals = [
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
        email: 12
    }
];
vals.forEach(function (emp) {
    console.log(emp.email);
});
