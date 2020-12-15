var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.getName = function () {
        this.name = 'Test';
        return this.name;
    };
    return A;
}());
var obj = new A();
console.log(obj.getName());
var B = /** @class */ (function () {
    function B(cid, name) {
        this.counter = 0; // specify a default value
        this.id = cid; // using this keyword
        this.name = name;
        // we can use the same name, in typescript all class level attributes are accessible using this keyword
    }
    B.prototype.getDetails = function () {
        this.counter += 1;
        this.useMe = 'getDetails was Called';
        return {
            id: this.id,
            name: this.name
        };
    };
    B.prototype.getHiddenValues = function () {
        return { counter: this.counter, message: this.useMe };
    };
    B.parent = 5;
    return B;
}());
var obj1 = new B(15, "Mohsin Khursheed");
console.log(obj1.getDetails());
console.log(obj1.getDetails());
console.log(obj1.getHiddenValues()); // since we can access private or protected variables
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C(cid, name, msg, key) {
        var _this = _super.call(this, cid, name) || this;
        _this.useMe = msg; // useMe is accesible in parent class since its protected
        _this.key = key; // read only can be initialised only once within the constructor or at the time of declaration
        return _this;
    }
    C.prototype.getMessage = function () {
        //const username:string = 'Admin'; // this is useless as the scope is confined to this method
        return this.useMe;
    };
    C.prototype.getValue = function () {
        //this.key = 15; // not possible since this is read only
        return C.num; // static attributes are accessible only via class & not using this keyword
    };
    C.getNum = function () {
        //return this.num; // this is a bad & ambiguous practice use class name instead
        return C.num + this.parent;
    };
    C.num = 1; // static variable
    return C;
}(B));
var obj2 = new C(7, "Techmomo", "I am in Class C - Child", 99);
var obj3 = new C(6, "Test", "Child Class", 53);
console.log(obj2.getDetails());
//console.log(obj2.getDetails());
console.log(obj2.getHiddenValues());
console.log(obj2.getMessage());
console.log(obj2.getValue());
C.num = 7; // re-assign a new value
console.log(obj2.getValue());
C.num = 5; // re-assign a new value
console.log(C.getNum()); // access static function directly via class name 
console.log(obj2.key);
console.log(obj3.key);
