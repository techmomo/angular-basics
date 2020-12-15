function list(params) {
    return new Array().concat(params);
}
var _nums = list([10, 12, 15]);
var _strs = list(["33", "66"]);
function map(param1, param2) {
    console.log(typeof param1 + ' --- ' + typeof param2);
}
map(8, 'Hello Generics');
var MyMap = /** @class */ (function () {
    function MyMap() {
    }
    MyMap.prototype.add = function (key, value) {
        this.key = key;
        this.value = value;
    };
    MyMap.prototype.get = function () {
        console.log("KEY : " + this.key + ", VALUE : " + JSON.parse(JSON.stringify(this.value)));
    };
    return MyMap;
}());
var obj4 = new MyMap();
obj4.add("ONE", JSON.stringify({ id: 4, name: "sample" }));
obj4.get();
